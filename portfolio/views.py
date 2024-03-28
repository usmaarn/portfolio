from flask import render_template, redirect, request, Blueprint, flash
from flask_login import current_user
from werkzeug.security import check_password_hash

from .forms import LoginForm
from .decorators import guest
from .models import User

bp = Blueprint('app', __name__)

@bp.route('/')
def home():
    return render_template('home.html')


@bp.route('/login', methods=['POST', 'GET'])
@guest
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data)
        if user is None:
            flash("Username does not exist!", "error")
        elif not check_password_hash(user.password, form.password.data):
            
            
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