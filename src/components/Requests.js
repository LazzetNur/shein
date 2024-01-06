const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://unofficial-shein.p.rapidapi.com/navigations/get-tabs',
  params: {
    language: 'en',
    country: 'US',
    currency: 'USD'
  },
  headers: {
    'X-RapidAPI-Key': '4f421d9cc0mshe2a09c0a3ed87adp18e0e2jsn37547b21ff0f',
    'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}