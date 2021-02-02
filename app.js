require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('/public'));

app.use(bodyParser.urlencoded({extended : true}));


//const url = `http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`;

app.get('/', function (req,res) {
    res.render('index') 
});

/*

  let cidade = req.body.cidade;
  let pais = req.body.pais;
  console.log("cidade pelo body parser: " + cidade);
  console.log("cidade pelo body parser: " + pais);

  const params = {
    access_key: process.env.KEY,
    query: `${cidade},${pais}`
    //query: 'Brazil,Bambui'
  }

  const url = `http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`;

  axios.get(url)
    .then(response =>{
      const apiResponse = response.data;
      //console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
      console.log(apiResponse.location.region);
      
    }).catch(error => {
      console.log(error);
    });

    res.render('index', {apiResponse : {}});

   
  });
  
})
*/

app.post('views/info', function(req,res){
    
    try{
        //let cidade = req.body.cidade;
        //let pais = req.body.pais; 

        res.send(req.body);

    }catch(error){
      console.log(error);
    }

});




app.listen(3000, function(){
  console.log("Rodando server na porta 3000");
});


//axios.get('https://api.weatherstack.com/current', {params})

/*
axios.get(url)
  .then(response => {
    const apiResponse = response.data;
    //console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    console.log(apiResponse.location.region);

    
  }).catch(error => {
    console.log(error);
});
*/

/*
app.get('/', function(req, res){ 
        res.render('index', {apiResponse : apiResponse}); //passando os dados capturados na API pro front
    });
*/

