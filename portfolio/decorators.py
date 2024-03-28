from functools import wraps
from flask import g, request, redirect, url_for
from flask_login import current_user

def login_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('app.login', next=request.url))
        return f(*args, **kwargs)
    return wrapper


def guest(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        if current_user.is_authenticated:
            return redirect('/')
        return f(*args, **kwargs)
    return wrapper