from wtforms import Form, BooleanField, StringField, PasswordField, EmailField, validators


class LoginForm(Form):
    username = StringField(validators=[
        validators.data_required("Username field is required")
    ])
    password = StringField(validators=[
        validators.data_required('Password field is required')
    ])


class SubscribeForm(Form):
    name = StringField(validators=[
        validators.length(min=3, max=)
    ])