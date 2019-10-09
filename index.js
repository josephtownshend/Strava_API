const axios = require('axios');
const express = require('express')
const app = express();
app.listen(8000, () => console.log('Example app listening on port 8000!'));
app.use(express.static('public'));



module.exports = {
  getUser(username) {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};
