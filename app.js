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
  } else if (pageURL === "./func.js" && req.method === "GET") {
    fs.readFile("./func.js", "utf-8", (err, data) => {
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
        console.log(err);
        return;
      }
      res.writeHead(200, { "Contant-Type": "image/png" });
      res.end(data);
    });
  }
});
server.listen(8080);
