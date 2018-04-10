function init() {

   let documentContent = ``;

   newColors.forEach((newColor, index) => {
      documentContent = documentContent.concat(mainTemplate(newColor, baseColors, index));
   });

   $('#colorsContainer').innerHTML = documentContent;

}

function getDistance(rgb1, rgb2) {

   return Math.sqrt(
      Math.pow(rgb1.r - rgb2.r, 2) +
      Math.pow(rgb1.g - rgb2.g, 2) +
      Math.pow(rgb1.b - rgb2.b, 2)
   );

}

function getNewColorClass(rgbNewColor, baseColors) {

   let classColor;
   let nearestBaseColors = baseColors.slice(0, KNN);

   nearestBaseColors.forEach(color => {
      
      if (color.classColor == 1) {
         counters.red++;
      } else if (color.classColor == 2) {
         counters.green++;
      } else {
         counters.blue++;
      }

   });
   
   if (counters.red > counters.green && counters.red > counters.blue) {
      classColor = 1;
   } else if (counters.green > counters.red && counters.green > counters.blue) {
      classColor = 2;
   } else {
      classColor = 3;
   }

   resetCounters();

   return classColor;

}

window.onload = ev => {
   init();

   document.querySelectorAll('.btn-container button').forEach(btn => {

      btn.onclick = ev => {
     
         hiddenControl(ev);
      
      };

   });

   document.querySelector('#knn').addEventListener('change', () => {

      KNN = parseInt(knnInput.value);
      init();

   });

};