from fastapi import FastAPI
import os

app = FastAPI()

data_file = "data.txt"

# 保存字符串到文件
@app.post("/save")
async def save_string(text: str):
    with open(data_file, "w") as f:
        f.write(text)
    return {"message": "字符串保存成功"}

# 读取文件中的字符串
@app.get("/read")
async def read_string():
    if os.path.exists(data_file):
        with open(data_file, "r") as f:
            return f.read()
    else:
        return "暂无数据"