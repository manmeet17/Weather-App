const request = require('request');

function getAddress(address,checker) {
  var encodedAddress=encodeURIComponent(address);
  request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,
    json:true
  }, (error,response,body) =>{
    if(error)
    checker("Error connecting to the Google Servers");
    else if(body.status === "ZERO_RESULTS")
    checker("Unable to find the address");
    else if(body.status==="OK"){
      results={
        "Address":body.results[0].formatted_address,
        "Latitude":body.results[0].geometry.location.lat,
        "Longitude":body.results[0].geometry.location.lng
      }
      checker(undefined,results);
    }
  });
}


module.exports.getAddress=getAddress;
