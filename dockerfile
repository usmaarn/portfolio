FROM python:3.12-slim

WORKDIR /src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

# CMD sh -c "gunicorn -w 4 -b 0.0.0.0:5000 main:app"
CMD sh -c "flask run --host 0.0.0.0 --debug"