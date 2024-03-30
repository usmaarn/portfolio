from flask import Flask
from flask_login import LoginManager
from flask_wtf.csrf import CSRFProtect
import datetime
from dotenv import load_dotenv
import os
from flask_ckeditor import CKEditor

from .views import bp
from .models import User, Site
from .db import db

load_dotenv()

csrf = CSRFProtect()

host = os.getenv('DB_HOST')
user = os.getenv('DB_USER')
password = os.getenv('DB_PASSWORD')
database = os.getenv('DB_DATABASE')

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY= os.getenv('SECRET_KEY'),
        SQLALCHEMY_DATABASE_URI=f"postgresql+psycopg://{user}:{password}@{host}/{database}",
        UPLOAD_FOLDER='portfolio/static/uploads'
    )

    # Load CKEditor
    ckeditor = CKEditor(app)

    # Add CLI Commands to App
    from .cli import user_cli, db_cli

    app.cli.add_command(user_cli)
    app.cli.add_command(db_cli)


    db.init_app(app)
    csrf.init_app(app)

    with app.app_context():
        db.create_all()

    @app.context_processor
    def global_variables():
        return {
            "date": datetime.date,
            "app_name": Site.query.filter_by(name='title').first() or os.getenv("APP_NAME", "App")
        }

    from .dashboard import dash

    app.register_blueprint(bp, url_prefix="/")
    app.register_blueprint(dash, url_prefix='/admin/')

    login_manager = LoginManager(app)
    login_manager.login_view = 'app.login'

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(user_id)
    
    return app
