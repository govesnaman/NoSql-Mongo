import numpy as np
from flask import Flask, request, jsonify,render_template, url_for
import pickle
#import model
import json
import logging
from flask_cors import CORS
import json
import pymongo
from bson import json_util, ObjectId

app = Flask(__name__)
CORS(app)

@app.route('/add',methods=['POST'])
def hello():
	print("working1")
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["db123"]
	mycol = mydb["admin"]
	##x1 = []
	#model = pickle.load(open('func.pkl','rb'))
	# Get the data from the POST request.
	##z = 1
	
	data = request.get_json(force=True)
	#y = json.loads(data)
	##exp1 = {'fname':data['name']}
	print(type(data))
	
	y = json.loads(json_util.dumps(data))
	x = mycol.insert_one(y)

	return jsonify(data)

@app.route('/showall',methods=['POST'])
def hi():
    print("working2")
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["db123"]
    mycol = mydb["admin"]
    a = []
    for x in mycol.find({},{"_id":0}):
        a.append(x)
        print(x)
    return jsonify(a)

@app.route('/edit',methods=['POST'])
def hey():
    print("working3")
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["db123"]
    mycol = mydb["admin"]
    a=[]
    data = request.get_json(force=True)

    y = json.loads(json_util.dumps(data))
    print(y)
    myquery = { "EmployeeID": y['EmployeeID'] }
    newvalues = { "$set": y }
    mycol.update_one(myquery, newvalues)
    return jsonify(a)

@app.route('/deletee',methods=['POST'])
def dele():
	data = request.get_json(force=True)
	print("data")
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["db123"]
	mycol = mydb["admin"]
	mycol.delete_one(data)
	return jsonify(data)

if __name__ == '__main__':
	app.run(port=5000, debug=True)
