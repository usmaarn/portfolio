from flask import Blueprint, render_template, redirect, url_for, current_app
from flask_login import login_required
from werkzeug.utils import secure_filename
from uuid import uuid4
import os

from .forms import SiteInfoForm, SkillForm, ProjectForm
from .models import Site, Skill, Project
from .db import db

dash = Blueprint('admin', __name__)

@dash.get('')
@login_required
def index():
    return render_template('admin.html')

@dash.route('site/', methods=['POST', 'GET'])
@login_required
def site():

    title = Site.query.filter_by(name='title').first()
    name = Site.query.filter_by(name='name').first()
    bio = Site.query.filter_by(name='bio').first()
    action = Site.query.filter_by(name='action').first()
    avatar = Site.query.filter_by(name='avatar').first()

    form = SiteInfoForm(title=title, name=name, bio=bio, action=action)
    if form.validate_on_submit():
        title.value = form.title.data
        name.value = form.name.data
        bio.value = form.bio.data
        action.value = form.action.data

        if form.avatar.data:
            upload_dir = current_app.config['UPLOAD_FOLDER']
            if avatar.value:
                os.unlink(os.path.join(upload_dir, avatar.value))
            file_ext = form.avatar.data.filename.rsplit('.')[1]
            filename = f"{uuid4()}.{file_ext}"
            form.avatar.data.save(os.path.join(upload_dir, filename))
            avatar.value = filename

        db.session.add_all([title, name, bio, action, avatar])
        db.session.commit()
    return render_template('admin/site.html', form=form)


@dash.route('skills/', methods=['POST', 'GET'])
@login_required
def skills():
    skills = Skill.query.all()
    return render_template('admin/skills.html', skills=skills)


@dash.route('skills/create/', methods=['GET', 'POST'])
@login_required
def create_skill():
    form = SkillForm()
    if form.validate_on_submit():
        skill = Skill(name=form.name.data, slug=form.slug.data, description=form.description.data)
        
        if form.icon.data:
            upload_dir = current_app.config['UPLOAD_FOLDER']
            file_ext = form.icon.data.filename.rsplit('.')[1]
            filename = f"{uuid4()}.{file_ext}"
            form.icon.data.save(os.path.join(upload_dir, filename))
            skill.icon = filename
        db.session.add(skill)
        db.session.commit()
        return redirect(url_for('admin.skills'))
    
    return render_template('admin/update-skills.html', form=form)


@dash.route('skills/<slug>/update/', methods=['POST', 'GET'])
@login_required
def update_skill(slug):
    skill = Skill.query.filter_by(slug=slug).first()
    form = SkillForm(name=skill.name, slug=skill.slug, description=skill.description)
    if form.validate_on_submit():
        skill.name = form.name.data
        skill.slug = form.slug.data
        skill.description = form.description.data
        if form.icon.data:
            upload_dir = current_app.config['UPLOAD_FOLDER']
            if skill.icon:
                os.unlink(os.path.join(upload_dir, skill.icon))
            file_ext = form.icon.data.filename.rsplit('.')[1]
            filename = f"{uuid4()}.{file_ext}"
            form.icon.data.save(os.path.join(upload_dir, filename))
            skill.icon = filename
        db.session.add(skill)
        db.session.commit()
        return redirect(url_for('admin.skills'))
    
    return render_template('admin/update-skills.html', form=form)


@dash.route('skills/<slug>/delete/', methods=['POST', 'GET'])
@login_required
def delete_skill(slug):
    skill = Skill.query.filter_by(slug=slug).first()
    db.session.delete(skill)
    db.session.commit()
    return redirect(url_for('admin.skills'))

# PROJECTS
@dash.get('projects/')
@login_required
def projects():
    projects = Project.query.all()
    return render_template('admin/projects.html', projects=projects)


@dash.route('projects/create', methods=['GET', 'POST'])
@login_required
def create_project():
    form = ProjectForm()
    form.technologies.choices = [(skill.id, skill.name) for skill in Skill.query.all()]

    if form.validate_on_submit():
        project = Project(
            title=form.title.data, slug=uuid4(), description=form.description.data)
        if form.thumbnail.data:
            upload_dir = current_app.config['UPLOAD_FOLDER']
            file_ext = form.thumbnail.data.filename.rsplit('.')[1]
            filename = f"{uuid4()}.{file_ext}"
            form.thumbnail.data.save(os.path.join(upload_dir, filename))
            project.thumbnail = filename
        
        project.technologies = [Skill.query.get(id) for id in form.technologies.data]
        db.session.add(project)
        db.session.commit()
        return redirect(url_for('admin.projects'))

    return render_template('admin/create-project.html', form=form)


@dash.route('projects/<slug>/update', methods=['GET', 'POST'])
@login_required
def update_project(slug):
    project = Project.query.filter_by(slug=slug).first()
    form = ProjectForm(
        title=project.title,
        description=project.description,
        # code=project.code,
        # link=project.link,
        technologies = [skill.id for skill in project.technologies]
    )
    form.technologies.choices = [(skill.id, skill.name) for skill in Skill.query.all()]

    if form.validate_on_submit():
        project.title = form.title.data
        project.description = form.description.data
        if form.thumbnail.data:
            upload_dir = current_app.config['UPLOAD_FOLDER']
            if project.thumbnail:
                os.unlink(os.path.join(upload_dir, project.thumbnail))
            file_ext = form.thumbnail.data.filename.rsplit('.')[1]
            filename = f"{uuid4()}.{file_ext}"
            form.thumbnail.data.save(os.path.join(upload_dir, filename))
            project.thumbnail = filename
        
        project.technologies = [Skill.query.get(id) for id in form.technologies.data]
        db.session.add(project)
        db.session.commit()
        return redirect(url_for('admin.projects'))

    return render_template('admin/create-project.html', form=form)

@dash.post('projects/<slug>/delete')
@login_required
def delete_project(slug):
    project = Project.query.filter_by(slug=slug).first()
    db.session.delete(project)
    db.session.commit()
    return redirect(url_for('admin.projects'))