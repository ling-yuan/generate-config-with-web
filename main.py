from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = "secret_key"

# 设定模板文件夹
app.template_folder = "./src/template"


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    # debug=True allows for changes to be seen without having to restart the server
    app.run(debug=True)
