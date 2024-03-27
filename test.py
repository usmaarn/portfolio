from sqlalchemy import create_engine, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase, relationship, Session
from sqlalchemy.sql import select
from typing import List

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = 'users'
    
    id: Mapped[int] = mapped_column(primary_key=True)
    firstname: Mapped[str]
    lastname: Mapped[str]
    username: Mapped[str] = mapped_column(unique=True, nullable=False)
    comments: Mapped[List['Comment']] = relationship(back_populates='user')

    def __repr__(self) -> str:
        return f"<User {self.username}>"
    
class Comment(Base):
    __tablename__ = 'comments'

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[str] = mapped_column(ForeignKey('users.id'), nullable=False)
    body: Mapped[str] = mapped_column(Text, nullable=False)
    user: Mapped['User'] = relationship(back_populates='comments')

    def __repr__(self) -> str:
        return f"<Comment {self.body[:10]} by={self.user.username}>"
    

engine = create_engine("postgresql+psycopg://root:root@localhost/testdb", echo=False)
Base.metadata.create_all(bind=engine)
session = Session(bind=engine)

u1 = User(
    firstname='Usman', 
    lastname='Muhammad', 
    username='baba', 
    comments=[
            Comment(body='Hello World'),
            Comment(body='This is my second comment'),
        ]
    )
u2 = User(firstname='Shulrah', lastname='Muhammad', username='sassy')


# session.add_all([u1, u2])
# session.commit()

# stmt = select(User).where(User.username.in_(['sassy', 'baba']))
# result = session.scalars(stmt)

result = session.query(User).all()

print(list(result))