const convertToCelsius = function(farenheit) {
  let c = (farenheit-32)*5/9
  let cRounded = Math.round(c * 10) / 10
  return cRounded;
}

const convertToFahrenheit = function(celcius) {
  let f = (celcius*9/5)+32
  let fRounded = Math.round(f * 10 ) / 10
  return fRounded;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
