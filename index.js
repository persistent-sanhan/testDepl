let http = require('http');

let server = http.createServer((request, response) => {
    response.write("hello world " + process.env.PORT);
    response.end();
});

server.listen(process.env.PORT);
console.log('listening on port '+ process.env.PORT);