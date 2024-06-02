from flask import Blueprint, jsonify

bp = Blueprint("vote", __name__, url_prefix="/vote")


@bp.route("/", methods=["GET"])
def get():
    return jsonify("heya!")
