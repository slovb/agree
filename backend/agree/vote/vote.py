from flask import Blueprint, jsonify, request

bp = Blueprint("vote", __name__, url_prefix="/vote")


@bp.route("/", methods=["POST"])
def vote():
    data = request.get_json()
    print(data)
    return jsonify("heya!")
