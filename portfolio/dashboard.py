from flask import Blueprint, render_template, request
from .decorators import login_required

dash = Blueprint('admin', __name__)

@dash.get('/')
@login_required
def index():
    return render_template('admin.html')