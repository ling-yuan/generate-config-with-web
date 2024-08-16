from flask import Flask
from src.router import router

app = Flask(__name__)
app.secret_key = "secret_key"

app.template_folder = "src/templates"
app.static_folder = "src/static"

app.register_blueprint(router, url_prefix="/")


if __name__ == "__main__":
    # debug=True allows for changes to be seen without having to restart the server
    app.run(debug=True)
