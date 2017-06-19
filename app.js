const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv=yargs
.options({
  a:{
    demand:true,
    alias:'address',
    describe:'Address to fetch weather for',
    string:true
  }
})
.help()
.alias('help','h')
.argv;

var lat,lng;
geocode.getAddress(argv.a, (error,results) => {
  if(error)
  console.log(error);
  else{
  console.log(results.Address);
  weather.getWeather(results.Latitude,results.Longitude,(error,results) =>{
    if(error)
    console.log(error);
    else
    console.log(JSON.stringify(results,undefined,2));
  });
}
});
