from wtforms import Form, BooleanField, StringField, PasswordField, EmailField
from wtforms.validators import DataRequired, Length, Email


class LoginForm(Form):
    username = StringField(validators=[
        DataRequired("Username field is required")
    ])
    password = PasswordField(validators=[
        DataRequired('Password field is required')
    ])


class SubscribeForm(Form):
    name = StringField(validators=[
        Length(min=3, max=25, message='Name must be between 3 - 25 chars')
    ])
    email = EmailField(validators=[
        DataRequired('Email field is required'),
        Email("Invalid Email Address")
    ])