const path = require('path');
const express = require('express');
const { config, engine } = require('express-edge');
//const expressEdge = require('express-edge');

const app = new express();

app.use(express.static('public'));
//app.use(expressEdge);
app.use(engine);
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'pages/index.html'));
  res.render('index');
})

app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'pages/about.html'));
  res.render('about');
})

app.get('/post', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'pages/post.html'));
  res.render('post');
})

app.get('/contact', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
  res.render('contact');
})

app.listen(4000, () => {
  console.log('App listening at 4000');
})