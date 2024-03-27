from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from . import db

class User(db.models):
    id: Mapped[int] = mapped_column(primary_key=True)
    firstname: Mapped[int] = mapped_column(nullable=False)
    lastname: Mapped[int] = mapped_column(nullable=)