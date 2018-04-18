let $ = document.querySelector.bind(document);

let form = $('#form_rgb');
let valsBody = $('.vals tbody');
let newsBody = $('.new tbody');

let baseColors = [
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

let newColors = [
   new Centroid(getNewRandomRGB()),
   new Centroid(getNewRandomRGB()),
   new Centroid(getNewRandomRGB())
];



/** Returns a new RGB color
 * 
 */
function getNewRandomRGB() {

   colors = {
      r: parseInt(Math.random() * 255),
      g: parseInt(Math.random() * 255),
      b: parseInt(Math.random() * 255)
   };

   let classColor = getClassColor(colors);

   return new ColorRGB(colors.r, colors.g, colors.b, classColor);

}



/** Returns the class of the color 
 *    1 -> Red
 *    2 -> Green
 *    3 -> Blue
 *    0 -> none
 */
function getClassColor(colors) {

   let colorClass;

   if (colors.r > colors.g && colors.r > colors.b) {
      colorClass = 1;
   } else if (colors.g > colors.r && colors.g > colors.b) {
      colorClass = 2;
   } else if (colors.b > colors.r && colors.b > colors.g) {
      colorClass = 3;
   } else {
      colorClass = 0;
   }

   return colorClass;

}