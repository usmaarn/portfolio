from flask import render_template, redirect, request, Blueprint
from flask_login import current_user

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
        pass
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