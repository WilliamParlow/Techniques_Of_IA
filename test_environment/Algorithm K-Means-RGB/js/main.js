/**
 * Init K-Means
 */
function init() {

   

   newColors = [];

}

init();



/**
 * Events
 */



form.addEventListener('submit', (ev) => {

   ev.preventDefault();

   let colors = {
      r: Math.parseInt(ev.target.r.value),
      g: Math.parseInt(ev.target.g.value),
      b: Math.parseInt(ev.target.b.value)
   };

   let rgb = new ColorRGB(
      colors.r,
      colors.g,
      colors.b,
      getClassColor(colors)
   );

   newColors.push(new Centroid(rgb));
   
   if (newColors.length >= 3) {
      init();
   }

});