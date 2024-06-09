import os

from flask import Flask
from flask_cors import CORS

from .vote.vote import bp as vote_bp


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    # app.config["CORS_HEADERS"] = "Content-Type"

    app.config.from_mapping(SECRET_KEY="devdev")

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile("config.py", silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    app.register_blueprint(vote_bp)

    return app