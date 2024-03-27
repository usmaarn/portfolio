FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /src/app

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD sh -c "gunicorn -w 4 -b 0.0.0.0:5000 --reload main:app"

