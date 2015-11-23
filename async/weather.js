var request = require('request');

module.exports = function (location) {
  return new Promise(function(resolve, reject){

    var encodedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=2de143494c0b295cca9337e1e96b00e0&units=metric';

    if (!location) {
      return reject('No location provided');
    }

    request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (error) {
        reject('Unable to fetch weather data');
      } else {
        //console.log(response);
        //console.log(JSON.stringify(body, null, 4));
        var temp = body.main.temp;
        var location = body.name;
        resolve('It is ' + temp + ' in ' + location);
      }
    });
  });
}
