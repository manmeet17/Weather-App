const yargs = require('yargs');
const axios = require('axios');
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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress;

// .get method returns a promise
//Axios knows how to automatically parse JSON
axios.get(geocodeUrl).then((response)=>{
  if(response.data.status=="ZERO_RESULTS"){
    throw new Error("Unable to find that address");
  }
  var lat=response.data.results[0].geometry.location.lat;
  var lng=response.data.results[0].geometry.location.lng;
  var weatherUrl="https://api.darksky.net/forecast/a946a3bee3c99b5dc3018f0315469923/"+lat+","+lng;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response)=>{
  var summary=response.data.currently.summary;
  var temp=response.data.currently.temperature;
  console.log("Weather:",summary);
  console.log("Temperature:",temp);
}).catch((e)=>{
  if(e.code=="ENOTFOUND")
  console.log("Error connecting to the API");
  else {
    console.log(e.message);
  }
});
