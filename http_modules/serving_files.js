const http = require("http");
const path = require("path");
const fs = require("fs");

const hostname = "localhost";
const port = 4000;

const server = http.createServer((req, res) => {
  //   console.log(`${req.method} request received`);
  if (req.method == "GET") {
    var fileURL;

    if (req.url == "/") {
      fileURL = "/index.html";
    } else {
      fileURL = req.url;
    }

    let filePath = path.resolve("./public" + fileURL);
    const fileExt = path.extname(filePath);

    if (fileExt == ".html") {
      fs.exists(filePath, exists => {
        if (!exists) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end("<html><body><h1>Page Not Found</h1></body></html>");
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("<html><body><h1>Page is not an HTML file.</h1></body></html>");
      return;
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>Req method not supported</h1></body></html>");
    return;
  }
});


server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
