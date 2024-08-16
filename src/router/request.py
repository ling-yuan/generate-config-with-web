from flask import Blueprint, render_template, render_template_string


def get_request(data={}):
    """
    传入data, 渲染请求页面
    """
    data = data if isinstance(data, dict) and data else {}
    return render_template("request.html", **data)


def get_response(data={}):
    """
    传入data, 渲染响应页面
    """
    data = data if isinstance(data, dict) and data else {}
    return render_template("response.html", **data)
