from flask import render_template, redirect, request, Blueprint, flash, url_for
from flask_login import current_user, login_user
from werkzeug.security import check_password_hash, generate_password_hash

from .forms import LoginForm
from .decorators import guest
from .models import User, Site, Skill, Project
from .db import db

bp = Blueprint('app', __name__)

@bp.route('/')
def home():
    context = {
        "title": Site.query.filter_by(name='title').first() or '',
        "name": Site.query.filter_by(name='name').first() or '',
        "bio": Site.query.filter_by(name='bio').first() or '',
        "action": Site.query.filter_by(name='action').first() or '',
        "avatar": Site.query.filter_by(name='avatar').first() or '',
        "skills": Skill.query.all(),
        "projects": Project.query.all()
    }
    return render_template('home.html', **context)


@bp.route('/login', methods=['POST', 'GET'])
@guest
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user:
            if check_password_hash(user.password, form.password.data):
                login_user(user, remember=form.remember.data)
                return redirect(request.args.get('next', '/'))
            else:
                form.password.errors.append("Incorrect Password")
        else:
            form.username.errors.append("User does not exist!")
    return render_template('login.html', form=form)


def subscribe():
    pass

def about():
    pass

def contact():
    pass

def projects():
    pass

def blogs():
    pass