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
  if (req.url === "/") {
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
  }
  if (req === "/func.js") {
    fs.readFile("/func.js", (err, data) => {
      res.writeHead(200);
      res.write(data);
      res.end();
    });
  }

  if (req.url.startsWith("/img/")) {
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

// const express = require("express");

// const app = express();

// app.listen(8080, () => {
//   console.log(`8080 SERVER START!!`);
// });
