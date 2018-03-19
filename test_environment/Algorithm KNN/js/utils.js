/////////////////
/// Variables ///
/////////////////


const KNN = 7;


var hiddenIndex = 0;


var counters = {
   red: 0,
   green: 0,
   blue: 0
};

var baseColors = [
   new ColorRGB(1, 10, 200, 3),
   new ColorRGB(2, 20, 230, 3),
   new ColorRGB(6, 25, 150, 3),
   new ColorRGB(7, 45, 100, 3),
   new ColorRGB(10, 50, 125, 3),
   new ColorRGB(3, 24, 111, 3),
   new ColorRGB(100, 4, 10, 1),
   new ColorRGB(250, 7, 50, 1),
   new ColorRGB(243, 5, 68, 1),
   new ColorRGB(210, 2, 90, 1),
   new ColorRGB(200, 1, 95, 1),
   new ColorRGB(215, 0, 68, 1),
   new ColorRGB(56, 200, 1, 2),
   new ColorRGB(79, 234, 3, 2),
   new ColorRGB(80, 210, 8, 2),
   new ColorRGB(95, 200, 10, 2),
   new ColorRGB(80, 210, 4, 2),
   new ColorRGB(49, 207, 1, 2)
];

var newColors = [
   new ColorRGB(1, 2, 100),
   new ColorRGB(10, 20, 30),
   new ColorRGB(8, 5, 20),
   new ColorRGB(237, 45, 100),
   new ColorRGB(1, 50, 101),
   new ColorRGB(67, 121, 12),

];

var $ = document.querySelector.bind(document);


////////////////
/// Functions //
////////////////




function resetCounters() {
   counters.red = 0;
   counters.green = 0;
   counters.blue = 0;
}



function hiddenControl(event) {

   let nextIndex = Number(eval(`${hiddenIndex} ${event.target.dataset.op} 1`));

   if (nextIndex >= 0 && nextIndex < newColors.length) {
      document.getElementById(`${hiddenIndex}`).classList.add('hidden');
      hiddenIndex = nextIndex;
      document.getElementById(`${hiddenIndex}`).classList.remove('hidden');
   }

}



function orderBaseColorsAsc(baseColors) {
   
   return baseColors.sort((a, b) => (a.distance > b.distance) ? 1 : -1);

}



function orderBaseColorsDesc(baseColors) {

   return baseColors.sort((a, b) => (a.distance < b.distance) ? 1 : -1);
   
}