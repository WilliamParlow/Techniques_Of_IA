// z = (TempAtual - mediaTodas) / variacao

var $ = document.querySelector.bind(document);

const variation = 3;

var temperatures = [];

var minTemp = getMediaValue() - variation;
var maxTemp = getMediaValue() - variation;
var tempVal;

var tempInterval = setInterval(() => {
   
   tempVal = Number($('.btn input').value);
   minTemp = getMediaValue() - variation;
   maxTemp = getMediaValue() + variation;

   if (tempVal < minTemp || tempVal > maxTemp) {
      $('body').style.background = '#900';
   } else {
      $('body').style.background = '#090';
   }

   $('.temp').innerHTML = `Temperatura<br /> ${tempVal}`;

   temperatures.push(tempVal);

   console.log(temperatures);

},1000);

function getMediaValue() {

   if (!temperatures.length) {
      return 0;
   }

   return temperatures.reduce((lastVal, actualVal) => lastVal + actualVal) / temperatures.length;

}