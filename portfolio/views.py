from flask import render_template, redirect, request, Blueprint

bp = Blueprint('app', __name__)

@bp.route('/')
def home():
    return render_template('home.html')


@bp.route('/login', methods=['POST', 'GET'])
def login():
    return render_template('login.html')


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