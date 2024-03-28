from sqlalchemy import Table, Column, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from typing import List, Text
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

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(unique=True)
    value: Mapped[str] = mapped_column(nullable=True)


class Skill(db.Model):
    __tabelname__ = 'skills'

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(unique=True)
    slug: Mapped[str] = mapped_column(unique=True)
    description: Mapped[Text] = mapped_column(nullable=True)
    icon: Mapped[str] = mapped_column(nullable=True)
    projects: Mapped[List['Project']] = relationship(back_populates='technologies')


class Project(db.Model):
    __tablename__ = 'projects'

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(unique=True)
    slug: Mapped[str] = mapped_column(unique=True)
    description: Mapped[Text] = mapped_column(nullable=True)
    technologies: Mapped[List['Skill']] = relationship(back_populates='projects')