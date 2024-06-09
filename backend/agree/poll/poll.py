from flask import Blueprint, jsonify

bp = Blueprint("poll", __name__, url_prefix="/poll")


@bp.route("/", methods=["GET"])
def get():
    return jsonify("heya!")
