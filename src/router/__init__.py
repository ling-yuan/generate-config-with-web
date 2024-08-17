from flask import Blueprint, render_template
from src.router.request import *


router = Blueprint("router", __name__)


@router.route("/")
def index():
    """首页"""
    directory_html = get_directory()
    request_html = get_request()
    response_html = get_response()
    data = {
        "directory": directory_html,
        "request": request_html,
        "response": response_html,
    }
    return render_template("index.html", **data)
