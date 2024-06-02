from flask import Blueprint

bp = Blueprint("vote", __name__, url_prefix="/auth")


@bp.route("/", methods=("GET"))
def get():
    return "hey"
