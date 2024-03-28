from flask import Flask
from flask_login import LoginManager
from flask_wtf.csrf import CSRFProtect
import datetime
from werkzeug.security import generate_password_hash

from .views import bp
from .models import User
from .db import db

csrf = CSRFProtect()

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        SQLALCHEMY_DATABASE_URI="postgresql+psycopg://usman:'Babalogun#1'@db/portfolio"
    )

    db.init_app(app)
    csrf.init_app(app)

    with app.app_context():
        db.create_all()
        user = User(username='usman', email='baba@test.com', password=generate_password_hash('12345'))
        db.session.add(user)
        db.session.commit()

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
        return User.get(user_id)
    
    return app