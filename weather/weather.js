const request = require('request');

var getWeather = (lat,lng,checker) => {
request({
  url:"https://api.darksky.net/forecast/a946a3bee3c99b5dc3018f0315469923/"+lat+","+lng,
  json:true
},(error,response,body) =>{
  if(!error && response.statusCode==200)
  {
    checker(undefined,{
      Summary:body.currently.summary,
      Temperature:(body.currently.temperature -32)*5/9
    });
  }
  else {
    checker("Unable to fetch weather");
  }
});
};

module.exports.getWeather = getWeather;
