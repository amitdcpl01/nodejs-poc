const http = require('http');

const fs = require('fs'); //fs - file system
const aboutPage = fs.readFileSync('about.html');
const homePage = fs.readFileSync('index.html');

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === '/about') {
    // return response.end('The ABOUT PAGE');
    return response.end(aboutPage);
  }
  else if (request.url === '/contact') {
    return response.end('The Contact PAGE');
  }
  else if (request.url === '/') {
    //return response.end('This is my Home page');
    return response.end(homePage);
  }
  else {
    //for status 404, if remove this line then it will be 200
    response.writeHead(404);
  }
  response.end('The Page was not find');
})

server.listen(4000);