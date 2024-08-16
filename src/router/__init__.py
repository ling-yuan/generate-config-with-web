from flask import Blueprint, render_template, render_template_string
from src.router.request import *


router = Blueprint("router", __name__)


@router.route("/")
def index():
    """首页"""
    request_html = get_request()
    data = {"html": request_html}
    return render_template("index.html", **data)
