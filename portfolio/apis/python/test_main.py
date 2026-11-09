from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_crud_flow():
    created = client.post("/posts", json={"title": "T", "body": "B"})
    assert created.status_code == 201
    pid = created.json()["id"]
    assert client.get(f"/posts/{pid}").json()["title"] == "T"
    assert client.put(f"/posts/{pid}", json={"title": "New"}).json()["title"] == "New"
    assert client.delete(f"/posts/{pid}").status_code == 204
    assert client.get(f"/posts/{pid}").status_code == 404


def test_rejects_empty_title():
    assert client.post("/posts", json={"title": ""}).status_code == 422
