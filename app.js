const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 保存字符串到文件
app.post('/save', (req, res) => {
  const { text } = req.body;
  fs.writeFileSync('data.txt', text);
  res.send('字符串保存成功');
});

// 读取文件中的字符串
app.get('/read', (req, res) => {
  try {
    const data = fs.readFileSync('data.txt', 'utf8');
    res.send(data);
  } catch (error) {
    res.send('暂无数据');
  }
});

app.listen(port, () => {
  console.log(`服务器运行在端口 ${port}`);
});