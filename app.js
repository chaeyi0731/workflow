// 서버 파일
const http = require("http");
const fs = require("fs");
const url = require("url");
const func = require("func.js");
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  const pageURL = req.url;
  const pathname = url.parse(pageURL, true).pathname;
  res.writeHead(200, { "Contant-Type": "text/html" });

  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        console.err("파일을 읽지 못했습니다.");
      } else {
        res.end(data);
      }
    });
  } else if (pathname === "/style.css") {
    fs.readFile("./style.css", "utf8", (err, data) => {
      res.writeHead(200);
      res.write(data);
      res.end();
    });
  }
  if (req === "/img") {
    fs.readFile("/img", (err, data) => {
      res.writeHead(200);
      res.write(data);
      res.end();
    });
  }
});
server.listen(8080);
//서버테스트 완료
