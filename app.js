// 서버 파일
const http = require("http");
const fs = require("fs");
const js = require("./func");
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.writeHead(200, { "Contant-Type": "text/html" });

  if (req.url === "/") {
    fs.readFile("./index.html", function (err, data) {
      if (err) {
        console.err("파일을 읽지 못했습니다.");
      } else {
        res.end(data);
      }
    });
  }
});
server.listen(8080);
//서버테스트 완료
