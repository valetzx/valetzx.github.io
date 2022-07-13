# coding:utf-8
import uvicorn
from fastapi import FastAPI, Response
from starlette.responses import FileResponse 
from crawler import main as new

app = FastAPI()

@app.get("/")
async def read_index():
    return FileResponse('index.html')

@app.get("/index.js")
async def read_js():
    return FileResponse('index.js')

@app.get("/news.css")
async def read_css():
    return FileResponse('news.css')

@app.get("/api")
def news(response: Response, index: int = 0, origin: str = 'zhihu', cache: str = 'null'):
    response.headers["Cache-Control"] = "max-age=86400, immutable, stale-while-revalidate"
    response.headers["Content-Type"] = "application/json; charset=utf-8"
    response.headers["Access-Control-Allow-Origin"] = "*"
    if origin == "undefined":
        origin = "zhihu"
    return new(index, origin)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, log_level="info")
