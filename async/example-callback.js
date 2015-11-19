var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0&units=metric';

request({
  url: url,
  json: true
}, function (error, response, body) {
  if (error) {
    console.log('Unable to fetch weather data');
  } else {
    //console.log(JSON.stringify(body, null, 4));
    var temp = body.main.temp;
    var location = body.name;
    console.log('It is ' + temp + ' in ' + location);
  }
});
