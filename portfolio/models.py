from sqlalchemy import Integer, String, DateTime
from sqlalchemy.orm import Mapped, mapped_column
from typing import List

from . import db

class User(db.models):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(primary_key=True)
    firstname: Mapped[str] = mapped_column(nullable=False)
    lastname: Mapped[str] = mapped_column(nullable=False)
    username: Mapped[str] = mapped_column(unique=True, nullable=False)
    email: Mapped[str] = mapped_column(unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    created_at: Mapped[DateTime] = mapped_column()
    email_verified_at: Mapped[DateTime] = mapped_column()

    def __repr__(self) -> str:
        pass


class Subscriber(db.models):
    __tablename__ = 'subscribers'

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    email: Mapped[str] = mapped_column(nullable=False, unique=True)
    created_at: Mapped[DateTime] = mapped_column()