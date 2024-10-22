import pymongo
import os
import json
from dotenv import load_dotenv
from models import Task

load_dotenv()

db: str = os.getenv("DB_NAME") 
client = pymongo.MongoClient("mongodb://localhost:27017/"+db)
db = client['ameya']
col = db['tasks']

def get_tasks():
    cur = col.find({})
    tasks = [t for t in cur]
    return {"tasks":tasks, "status": 200}

def get_task(id):

    cur = col.find({"_id": id})
    task = [t for t in cur]
    return {"task": task, "status": 500}

def create_task(task: Task):
    task = task.model_dump()
    t= get_tasks()
    result = col.insert_one({"_id": t["tasks"][-1]['_id'] + 1,"task": task['task'], "isComplete": task['isComplete']})    
    
    if result.acknowledged:
        return {"message": "Created successfully...", "status": 200}
    else:
        return {"message": "Failed to create", "status": 500}
    
def update_task(id, task: Task):
    try:
        print(type(id))
        task = task.model_dump()
        result = col.update_one({"_id": int(id)}, {"$set": {"task":task['task'],"isComplete":task['isComplete']}})
        if result.acknowledged:
            print(result)
            return {"message": "Updated successfully...", "status": 200}
        else:
            return {"message": "Failed to update", "status": 500}
    except TypeError:
        print("type error")    

def delete_task(id):
    try:
        result = col.delete_one({"_id": int(id)})
        if result.acknowledged :
            return {"message": "Deleted Successfully...", "status": 200}
        else:
            return {"message": "Failed to delete", "status": 500}
    except:
        print("err")    