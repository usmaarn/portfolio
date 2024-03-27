FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /src/app

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD sh -c "flask run --host 0.0.0.0 --debug"

