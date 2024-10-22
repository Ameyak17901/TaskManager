from pydantic import BaseModel

class Task(BaseModel):
    task: str
    isComplete: bool
