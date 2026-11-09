"""Small CRUD API with FastAPI. Run: uvicorn main:app --reload"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="Portfolio Posts API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["GET", "POST", "PUT", "DELETE"], allow_headers=["*"])


class PostIn(BaseModel):
    title: str = Field(min_length=1, max_length=120)
    body: str = Field(default="", max_length=2000)


DB: dict[int, dict] = {1: {"id": 1, "title": "Hello", "body": "First post"}}
next_id = 2


@app.get("/posts")
def list_posts():
    return list(DB.values())


@app.get("/posts/{post_id}")
def get_post(post_id: int):
    if post_id not in DB:
        raise HTTPException(404, "Post not found")
    return DB[post_id]


@app.post("/posts", status_code=201)
def create_post(data: PostIn):
    global next_id
    DB[next_id] = {"id": next_id, **data.model_dump()}
    next_id += 1
    return DB[next_id - 1]


@app.put("/posts/{post_id}")
def update_post(post_id: int, data: PostIn):
    if post_id not in DB:
        raise HTTPException(404, "Post not found")
    DB[post_id] = {"id": post_id, **data.model_dump()}
    return DB[post_id]


@app.delete("/posts/{post_id}", status_code=204)
def delete_post(post_id: int):
    if DB.pop(post_id, None) is None:
        raise HTTPException(404, "Post not found")
