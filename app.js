// 서버 파일
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
// const func = require("func.js");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  const pageURL = req.url;
  const pathname = url.parse(pageURL, true).pathname;

  function serverErrorLog() {
    res.writeHead(500);
    return res.end("서버에 문제가 생겼습니다.");
  }

  //* 응답받은 url이 "/"일떄
  if (pageURL === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        console.err("파일을 읽지 못했습니다.");
      } else {
        res.writeHead(200, { "Contant-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (pathname === "/style.css") {
    fs.readFile("./style.css", "utf8", (err, data) => {
      res.writeHead(200);
      res.write(data);
      res.end();
    });
  } else if (pageURL === "/func.js") {
    fs.readFile("./func.js", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, { "Content-type": "application/javascript" });
      res.end(data);
    });
  } else if (pageURL.startsWith("/img/")) {
    let imageName = path.basename(req.url);
    let imagePath = "./img/" + imageName;

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { "Contant-Type": "image/png" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});
server.listen(8080);
