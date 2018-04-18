// Classe para cores RGB
class ColorRGB {

   constructor(r, g, b, classColor) {
      this._r = r;
      this._g = g;
      this._b = b;
      this._classColor = classColor;
      this._distance = 0;
   }

   get r() {
      return this._r;
   }

   set r(r) {
      this._r = r;
   }

   get g() {
      return this._g;
   }

   set g(g) {
      this._g = g;
   }

   get b() {
      return this._b;
   }

   set b(b) {
      this._b = b;
   }

   get classColor() {
      return this._classColor;
   }

   set classColor(classColor) {
      this._classColor = classColor;
   }

   get distance() {
      return this._distance;
   }

   set distance(distance) {
      this._distance = distance;
   }

}

// Classe para os novos pontos centróides 
class Centroid {

   constructor(rgb) {
      this._rgb = rgb;
      this._distances = [];
   }

   get rgb() {
      return this._rgb;
   }

   set rgb(rgb) {
      this._rgb = rgb;
   }

   get distances() {
      return this._distances;
   }

   set distances(distances) {
      this._distances = distances;
   }

   addDistance(distance) {
      this._distances.push(distance);
   }

}