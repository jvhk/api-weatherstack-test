require('dotenv').config();

//config de server
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){ 
    res.render('index');
});


app.listen(3000, function(){
    console.log("Rodando server na porta 3000");
});

//config de server fim


const axios = require('axios');

const params = {
  access_key: process.env.KEY,
  query: 'Brazil,Bambui'
}


console.log(params.access_key);
console.log(params.query);


const url = `http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`;


//axios.get('https://api.weatherstack.com/current', {params})
axios.get(url)
  .then(response => {
    const apiResponse = response.data;
    //console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    console.log(apiResponse.location.region);
  }).catch(error => {
    console.log(error);
  });


