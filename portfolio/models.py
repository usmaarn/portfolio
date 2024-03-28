from sqlalchemy.orm import Mapped, mapped_column
from typing import List
from datetime import datetime
from flask_login import UserMixin

from .db import db

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(primary_key=True)
    firstname: Mapped[str] = mapped_column(nullable=True)
    lastname: Mapped[str] = mapped_column(nullable=True)
    username: Mapped[str] = mapped_column(unique=True, nullable=False)
    email: Mapped[str] = mapped_column(unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    created_at: Mapped[datetime] = mapped_column(default=datetime.now)
    email_verified_at: Mapped[datetime] = mapped_column(nullable=True)

    def __repr__(self) -> str:
        return f"<User {self.username}>"


class Subscriber(db.Model):
    __tablename__ = 'subscribers'

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    email: Mapped[str] = mapped_column(nullable=False, unique=True)
    created_at: Mapped[datetime] = mapped_column(default=datetime.now)


class Site(db.Model):
    __tablename__ = 'site_info'

    name: Mapped[str] = mapped_column(unique=True)
    value = Mapped[str] = mapped_column(nullable=True)


class Skill(db.Model):
    __tabelname__ = 'skills'

    
    name: Mapped[str] = mapped_column(unique=True)
    value = Mapped[str] = mapped_column(nullable=True)