from flask import Flask
import datetime

from portfolio.views import bp

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    @app.context_processor
    def global_variables():
        return {
            "date": datetime.date,
        }

    app.register_blueprint(bp)

    return app