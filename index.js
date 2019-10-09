const express = require('express')
const app = express();
app.listen(8000, () => console.log('Example app listening on port 8000!'));
app.use(express.static('public'));

fetch('https://www.strava.com/api/v3/athletes/3801016')
.then(function(response) {
  console.log(response)
console.log('Hello!')
});
