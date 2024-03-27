from flask import Flask
from flask_login import LoginManager
import datetime


from portfolio.views import bp

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    login_manager = LoginManager(app)
    @login_manager.user_loader
    def load_user(user_id):
        return 

    @app.context_processor
    def global_variables():
        return {
            "date": datetime.date,
        }

    app.register_blueprint(bp)

    return app