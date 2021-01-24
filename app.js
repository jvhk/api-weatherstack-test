require('dotenv').config();
const axios = require('axios');
//require('process');

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
    //console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);*/
    console.log(apiResponse.location.region);
  }).catch(error => {
    console.log(error);
  });