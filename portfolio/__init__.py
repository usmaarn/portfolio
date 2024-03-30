from flask import Flask
from flask_login import LoginManager
from flask_wtf.csrf import CSRFProtect
import datetime
from dotenv import load_dotenv
import os

from .views import bp
from .models import User
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
        SQLALCHEMY_DATABASE_URI=f"postgresql+psycopg://{user}:{password}@{host}/{database}"
    )

    db.init_app(app)
    csrf.init_app(app)

    with app.app_context():
        db.create_all()

    @app.context_processor
    def global_variables():
        return {
            "date": datetime.date,
        }

    from .dashboard import dash

    app.register_blueprint(bp)
    app.register_blueprint(dash, url_prefix='/admin')

    login_manager = LoginManager(app)
    login_manager.login_view = 'app.login'

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(user_id)
    
    return app
