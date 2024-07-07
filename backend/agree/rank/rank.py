from flask import Blueprint, jsonify, request

bp = Blueprint("rank", __name__, url_prefix="/rank")


@bp.route("/", methods=["POST"])
def rank():
    data = request.get_json()
    print(data)
    return jsonify("heya!")
