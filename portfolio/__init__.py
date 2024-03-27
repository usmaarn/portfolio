from flask import Flask
from datetime import datetime

from portfolio.views import bp

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    @app.context_processor
    def date(*arg, **kwargs):
        return datetime.date()

    app.register_blueprint(bp)

    return app