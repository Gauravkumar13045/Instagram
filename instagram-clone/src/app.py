from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("./dashboard")

@app.route("/submit", methods=["POST"])
def submit():
    username = request.form.get("username")
    password = request.form.get("password")

    if username == "Admin123" and password == "qwerty123":
        return render_template("./")

if __name__ == "__main__":
    app.run(debug=True)