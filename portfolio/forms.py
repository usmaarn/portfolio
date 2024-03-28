from wtforms import Form, BooleanField, StringField, PasswordField, EmailField, validators


class LoginForm(Form):
    username = StringField(validators=[
        validators.data_required("Username field is required")
    ])
    password = PasswordField(validators=[
        validators.data_required('Password field is required')
    ])


class SubscribeForm(Form):
    name = StringField(validators=[
        validators.length(min=3, max=25, message='Name must be between 3 - 25 chars')
    ])
    email = EmailField(validators=[
        validators.data_required('Email field is required'),
        validators.email("Invalid Email Address")
    ])