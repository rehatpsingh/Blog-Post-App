//Modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');

//Creating Application
const app = express();

//Mid Ware
app.use(express.static('public'))
app.set('view engine', 'ejs')


// get routing using render

//1. Index route
app.get('/', (req,res)=> {
  res.render('index');
})

//2. about route
app.get('/about', (req,res)=> {
  res.render('about');
})

//3. contact route
app.get('/contact', (req,res)=> {
  res.render('contact');
})

//4. post route
app.get('/post',(req, res) => {
  res.render('post');
})


// get routing

//1. Index route
// app.get('/',(req, res) => {
//   res.sendFile(path.resolve(__dirname,'pages/index.html'));
// })

// //2. About route
// app.get('/about',(req, res) => {
//   res.sendFile(path.resolve(__dirname,'pages/about.html'));
// })

// //3. Contact route
// app.get('/contact',(req, res) => {
//   res.sendFile(path.resolve(__dirname,'pages/contact.html'));
// })

// //4. Post route
// app.get('/post',(req, res) => {
//   res.sendFile(path.resolve(__dirname,'pages/post.html'));
// })

app.listen(4000, () => {console.log("Application link : http://localhost:4000/")});
