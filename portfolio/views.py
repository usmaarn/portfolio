from flask import render_template, redirect, request, Blueprint


bp = Blueprint('app', __name__)

@bp.route('/')
def home():
    return render_template('home.html')

 
def loginPage():
    pass

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