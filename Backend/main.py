from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services import get_tasks,get_task, create_task, update_task, delete_task
from models import Task
import json
app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(CORSMiddleware, 
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get('/')
def index():
    return {"status": "Hello World!"}

@app.get("/tasks")
def getTasks():
    tasks = get_tasks()
    return tasks

@app.get("/tasks/{id}")
def getTask(id):
    task = get_task(id)
    return task

@app.post("/tasks")
async def createTask(task: Task):
    print(type(task))
    result = create_task(task)
    return result

@app.put("/tasks/{id}")
def updateTask(id,task: Task):
    result = update_task(id,task)
    return result

@app.delete("/tasks/{id}")
def deleteTask(id):
    result = delete_task(id)
    return result

if __name__ == '__main__':
    app.run()