from flask import Blueprint, render_template, request

dash = Blueprint('admin', __name__)

@dash.get('/')
def index():
    return render_template('dashboard/index.html')