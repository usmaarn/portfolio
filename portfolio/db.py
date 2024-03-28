from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from flask import current_app, g
import click


class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)

db.init_app(current_app)

with current_app.app_context():
    db.create_all()