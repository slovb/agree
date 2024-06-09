from flask import Blueprint, jsonify

bp = Blueprint("vote", __name__, url_prefix="/vote")


@bp.route("/", methods=["POST"])
def vote():
    return jsonify("heya!")
