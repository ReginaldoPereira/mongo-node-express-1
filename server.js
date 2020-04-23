const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
  })



  app.get('/', function (request, response) {
    // work here
 })
 app.get('/', (req, res) => {
    res.send('PDP') 
 })