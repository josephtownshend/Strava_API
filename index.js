require('dotenv').config()
const axios = require('axios');
const express = require('express')
const app = express();
app.listen(8000, () => console.log('Example app listening on port 8000!'));
app.use(express.static('public'));
const api_token = process.env.API_TOKEN;
console.log(process.env)

module.exports = {
  getUser(username) {
    return axios
      .get('https://www.strava.com/api/v3/athletes/'+ username +'/?access_token='+ api_token)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};
