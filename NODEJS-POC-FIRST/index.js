// const http = require('http');

// const fs = require('fs'); //fs - file system
// const aboutPage = fs.readFileSync('about.html');
// const homePage = fs.readFileSync('index.html');

// const server = http.createServer((request, response) => {
//   console.log(request.url);

//   if (request.url === '/about') {
//     // return response.end('The ABOUT PAGE');
//     return response.end(aboutPage);
//   }
//   else if (request.url === '/contact') {
//     return response.end('The Contact PAGE');
//   }
//   else if (request.url === '/') {
//     //return response.end('This is my Home page');
//     return response.end(homePage);
//   }
//   else {
//     //for status 404, if remove this line then it will be 200
//     response.writeHead(404);
//   }
//   response.end('The Page was not find');
// })

// server.listen(4000);

const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (request, response) => {
  // response.json({
  //   name: 'Amit Kumar'
  // });
  //response.sendFile(index.html); //path is not define so we will use
  response.sendFile(path.resolve(__dirname, 'index.html'));
  console.log(path.resolve(__dirname)); //path of file 
});

app.get('/about', (request, response) => {
  // response.json({
  //   about: 'This is my about you page details'
  // })
  response.sendFile(path.resolve(__dirname, 'about.html'));
});

app.listen(4000, () => {
  console.log('App listing on port 4000');
});