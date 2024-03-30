from sqlalchemy import Table, Column, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from typing import List, Text
from datetime import datetime
from flask_login import UserMixin

from .db import db


# Association Tables
project_skill_association_table = Table(
    "project_skill_association_table",
    db.Model.metadata,
    Column("project_id", ForeignKey('projects.id'), primary_key=True),
    Column("skill_id", ForeignKey('skills.id'), primary_key=True),
)


# Models
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

    def __repr__(self) -> Text:
        return self.value or ''


class Skill(db.Model):
    __tablename__ = 'skills'

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(unique=True)
    slug: Mapped[str] = mapped_column(unique=True)
    description: Mapped[Text] = mapped_column(nullable=True)
    icon: Mapped[str] = mapped_column(nullable=True)
    projects: Mapped[List['Project']] = relationship(secondary=project_skill_association_table, back_populates='technologies')


class Project(db.Model):
    __tablename__ = 'projects'

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(unique=True)
    slug: Mapped[str] = mapped_column(unique=True)
    # code: Mapped[str] = mapped_column(nullable=True)
    # link: Mapped[str] = mapped_column(nullable=True)
    description: Mapped[Text] = mapped_column(nullable=True)
    thumbnail: Mapped[str] = mapped_column(nullable=True)
    technologies: Mapped[List['Skill']] = relationship(secondary=project_skill_association_table, back_populates='projects')