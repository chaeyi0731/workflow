// 서버 파일
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.writeHead(200, { "Contant-Type": "text/html" });
  let doc = "<html> <head> <body> <h1> hello </h1></body> </head></html>";
  res.end(doc);
});
server.listen(8080);
//서버테스트 완료
