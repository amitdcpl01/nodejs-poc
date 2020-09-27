const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === '/about') {
    return response.end('The ABOUT PAGE');
  }
  else if (request.url === '/contact') {
    return response.end('The Contact PAGE');
  }
  else if (request.url === '/') {
    return response.end('This is my Home page');
  }
  else {
    //for status 404, if remove this line then it will be 200
    response.writeHead(404);
  }
  response.end('The Page was not find');
})

server.listen(4000);