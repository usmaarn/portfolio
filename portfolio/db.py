from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from flask import current_app, g
import click


class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
