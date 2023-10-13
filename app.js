// 서버 파일
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  console.log(request.method);
  console.log(request.url);

  res.writeHead(200, { "Contant-Type": "text/html" });
  if (request.url === "/") {
    console.log("메인입니다.");
  }
});
server.listen(8080);
