from enum import Enum

from flask import Blueprint, jsonify

bp = Blueprint("poll", __name__, url_prefix="/poll")


class YayNay(str, Enum):
    YAY = "yay"
    NAY = "nay"


ideaList = [
    {
        "id": "asdfasdf",
        "title": "Pizza",
        "yaynay": YayNay.YAY,
        "subtitle": "Round joy",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "motions": ["Good pizza place"],
    },
    {
        "id": "a0sdfasdf",
        "title": "Taco",
        "yaynay": YayNay.YAY,
    },
    {
        "id": "as1dfasdf",
        "title": "Burger",
        "yaynay": YayNay.YAY,
        "subtitle": "YumBun",
        "text": "Et harum quidem rerum facilis est et expedita distinctio.",
    },
    {
        "id": "asd2fasdf",
        "title": "Thai",
        "yaynay": YayNay.YAY,
        "text": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
    {
        "id": "asdf3asdf",
        "title": "Sushi",
        "yaynay": YayNay.NAY,
        "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        "id": "asdfa4sdf",
        "title": "Pizza",
        "yaynay": YayNay.NAY,
        "subtitle": "Round joy",
        "text": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        "motions": ["Dumpstertruck pizzas"],
    },
]


@bp.route("/", methods=["GET"])
def get():
    return jsonify(ideaList)