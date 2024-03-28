from functools import wraps
from flask import g, request, redirect, url_for

def login_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('app.login', next=request.url))
        return f(*args, **kwargs)
    return wrapper
