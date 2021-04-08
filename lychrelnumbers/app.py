from flask import Flask, render_template

app = Flask(__name__)

@app.route("/index")
def lychrel_html():
    return render_template("lychrel_numbers.html")

if __name__ == "__main__":
    app.run("127.0.0.1", 56412)