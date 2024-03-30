from flask import Blueprint, render_template, request
from flask_login import login_required

from .forms import SiteInfoForm, SkillForm
from .models import Site, Skill
from .db import db

dash = Blueprint('admin', __name__)

@dash.get('/')
@login_required
def index():
    return render_template('admin.html')

@dash.route('/site', methods=['POST', 'GET'])
@login_required
def site():

    title = Site.query.filter_by(name='title').first()
    name = Site.query.filter_by(name='name').first()
    bio = Site.query.filter_by(name='bio').first()
    action = Site.query.filter_by(name='action').first()

    form = SiteInfoForm(title=title, name=name, bio=bio, action=action)
    if form.validate_on_submit():
        title.value = form.title.data
        name.value = form.name.data
        bio.value = form.bio.data
        action.value = form.action.data

        db.session.add_all([title, name, bio, action])
        db.session.commit()
    return render_template('admin/site.html', form=form)


@dash.route('/skills', methods=['POST', 'GET'])
@login_required
def skills():
    form = SkillForm()
    skills = Skill.query.all()
    return render_template('admin/skills.html', skills=skills, form=form)