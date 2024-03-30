import click 
from flask.cli import AppGroup
from flask import current_app
from werkzeug.security import generate_password_hash
from getpass import getpass

from .db import db
from .models import User, Site

user_cli = AppGroup('user', help="Create, Update, Delete, List users")

@user_cli.command('create', help="Create a user")
@click.argument('username')
@click.option('--firstname', default='', help="the user firstname")
@click.option('--lastname', default='', help="the user lastname")
@click.option('--email', default='', help="the user email")
@click.option('--role', default=1, help="the role of the user")
def create_user(username, firstname, lastname, email, role):
    password = getpass("Enter password: ")
    password_confirmation = getpass("Re-enter password: ")

    while password != password_confirmation:
        print("---------------------------")
        print("Password does not match")
        print("---------------------------")
        password = getpass("Enter password: ")
        password_confirmation = getpass("Re-enter password: ")

    user = User(
        firstname=firstname,
        lastname=lastname,
        username=username.lower(),
        email=email,
        password=generate_password_hash(password),
    )

    db.session.add(user)
    db.session.commit()
    print(f"{username} created.")


@user_cli.command('delete', help="Delete user")
@click.argument("username")
def deleteUser(username):
    user = User.query.filter_by(username=username.lower()).first()
    if user is None:
        print(f"user does not exist")
    else:
        db.session.delete(user)
        db.session.commit()
        print(f"{username} deleted.")


@user_cli.command('list', help="List all users")
def listUsers():
    users = User.query.all()
    
    print(f"{'Name':<10} | {'Username':<10} | {'Email':<10}")
    print()
    for user in users:
        print(f"{user.firstname:<10} | {user.username:<10} | {user.email:<10}")


# Database Cli
db_cli = AppGroup('db', help="Perform database transactions")

@db_cli.command('migrate', help="Migrate all models")
def migrate():
    with current_app.app_context():
        db.create_all()
        print('Database Migrated.')

@db_cli.command('rollback', help="Rollback all migrations")
def rollback():
    with current_app.app_context():
        db.drop_all()
        print('All Table Dropped')


@db_cli.command('populate', help="Populate Database")
def populatep():
    with current_app.app_context():
        db.session.add_all([
            Site(name='title', value="My App"),
            Site(name='name', value="My Name"),
            Site(name='bio', value="My Bio"),
            Site(name='action', value="Hire Me"),
            Site(name='avatar', value=""),
        ])
        db.session.commit()