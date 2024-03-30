from wtforms import BooleanField, StringField, PasswordField, EmailField, TextAreaField, FileField
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


class SiteInfoForm(FlaskForm):
    title = StringField('Site Title', validators=[
        DataRequired(),
        Length(min=5, max=25)
    ])
    name = StringField('User Name', validators=[
        DataRequired(),
        Length(min=6, max=50)
    ])
    bio = TextAreaField('Bio', validators=[
        DataRequired(),
        Length(min=300)
    ])
    action = StringField('Button Text', default='Hire Me')
    # image = FileField('Image', validators=[
        
    # ])

class SkillForm(FlaskForm):
    name = StringField('Skill Name', validators=[
        DataRequired(),
        Length(min=5, max=25)
    ])
    slug = StringField('Skill Slug', validators=[
        DataRequired(),
        Length(min=6, max=50)
    ])
    description = TextAreaField('Description', validators=[
        DataRequired()
    ])
    # icon = FileField('Image', validators=[
        
    # ])