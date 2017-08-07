let http = require('http');

let server = http.createServer((request, response) => {
    response.write("hello world");
    response.end();
});

server.listen(process.env.PORT);
console.log('listening on port');