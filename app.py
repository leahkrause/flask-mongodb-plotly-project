from flask import Flask, render_template

# Flask Setup
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/about")
def cuisines():
    return render_template("about.html")

if __name__ == '__main__':
    app.run(debug=True)
