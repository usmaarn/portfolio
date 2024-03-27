from uuid import uuid4
from flask import Flask

from portfolio.views import bp

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    app.register_blueprint(bp)

    return app