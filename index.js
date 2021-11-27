const http = require("http");
const host = "localhost";
const port = 3000;
const logger = require("./utils/fs");
const requestListener = function (req, res) {
    //The HTTP 200 OK success status response code indicates that the request has succeeded.
    res.writeHead(200);
    let url = req.url;
    //Logs the current request to logs/request.log file.
    logger(__dirname, req);
    switch (url) {
        case "/":
            res.write("<h1>Home Page<h1>");
            res.end();
            break;

        case "/about-us":
            res.write("<h1>About Us<h1>");
            res.end();
            break;

        case "/contact":
            res.write("<h1>Contact<h1>");
            res.end();
            break;

        default:
            res.write("<h1>404 Not Found<h1>");
            res.end();
            break;
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on => ${host}:${port}`);
});
