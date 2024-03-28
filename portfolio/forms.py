from wtforms import BooleanField, StringField, PasswordField, EmailField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length, Email


class LoginForm(FlaskForm):
    username = StringField(validators=[
        DataRequired("Username field is required")
    ])
    password = PasswordField(validators=[
        DataRequired('Password field is required')
    ])
    remember = BooleanField()


class SubscribeForm(FlaskForm):
    name = StringField(validators=[
        Length(min=3, max=25, message='Name must be between 3 - 25 chars')
    ])
    email = EmailField(validators=[
        DataRequired('Email field is required'),
        Email("Invalid Email Address")
    ])