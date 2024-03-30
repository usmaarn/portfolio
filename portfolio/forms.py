from wtforms import BooleanField, StringField, PasswordField, EmailField, SelectMultipleField
from flask_ckeditor import CKEditorField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length, Email
from flask_wtf.file import FileField, FileAllowed, FileSize

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


class SiteInfoForm(FlaskForm):
    title = StringField('Site Title', validators=[
        DataRequired(),
        Length(min=5, max=25)
    ])
    name = StringField('User Name', validators=[
        DataRequired(),
        Length(min=6, max=50)
    ])
    bio = CKEditorField('Bio', validators=[
        DataRequired(),
        Length(min=300)
    ])
    action = StringField('Button Text', default='Hire Me')
    avatar = FileField('Image', validators=[
        FileAllowed(['jpg', 'png', 'jpeg', 'svg'], message="Images Only")
    ])

class SkillForm(FlaskForm):
    name = StringField(validators=[ DataRequired() ])
    slug = StringField(validators=[ DataRequired() ])
    description = CKEditorField()
    icon = FileField(validators=[
        FileSize(max_size=5000, message="File too large"),
        FileAllowed(['jpg', 'png', 'jpeg', 'svg'], message="Images Only")
    ])


class ProjectForm(FlaskForm):
    title = StringField('Title', validators=[
        DataRequired(),
        Length(min=5, max=50)
    ])
    description = CKEditorField('Bio', validators=[
        DataRequired(),
        Length(min=300)
    ])
    code = StringField('Source Code Url')
    link = StringField('Project Url')
    thumbnail = FileField('Image', validators=[
        FileAllowed(['jpg', 'png', 'jpeg', 'svg'], message="Images Only")
    ])

    technologies = SelectMultipleField(validators=[
        DataRequired()
    ])