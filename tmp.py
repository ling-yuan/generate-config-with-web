from flask import Flask, render_template

app = Flask(__name__)
app.template_folder = "src/template"


@app.route("/")
def hello_world():
    html_text = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
    </html>
    """
    return render_template("tmp.html", html_text=html_text)


if __name__ == "__main__":
    app.run(debug=True)
