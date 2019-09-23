from flask import Flask, render_template
import pymongo
app = Flask(__name__)
conn = 'mongodb://localhost:27017/Olympic_Medals'
client = pymongo.MongoClient(conn)

@app.route("/")
def index():
   olympics = client.db.Project_2.find_one()
   return render_template("index.html", olympics=olympics)
