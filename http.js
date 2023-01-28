const http = require("http");
const host = 'localhost';
const port = 3001;
const requestListener = function (req, res) {
    if(req.url === '/'){
        res.end('Hello World!')
    } else {
        res.end('Desconhecido')
    }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});