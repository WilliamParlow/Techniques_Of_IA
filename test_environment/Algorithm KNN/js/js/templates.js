function mainTemplate(rgbNewColor, baseColors, index) {

  return `
   
     <div id="${index}" class="flex-colors ${(index == 0) ? '' : 'hidden'}">
     
         ${getTableBaseColor(baseColors, rgbNewColor)}
         ${getTableNewColor(rgbNewColor, baseColors)}
     
     </div>
   
   `;

}



function getTableBaseColor(baseColors, rgbNewColor) {

  let body = ``;

  baseColors.forEach(baseColor => {

    baseColor.distance = Number(getDistance(rgbNewColor, baseColor).toFixed(2));

  });

  orderBaseColorsAsc(baseColors).forEach(baseColor => {

    body = body.concat(`
      <tr>
        <td>${baseColor.r}</td>
        <td>${baseColor.g}</td>
        <td>${baseColor.b}</td>
        <td>${baseColor.classColor}</td>
        <td>${baseColor.distance}</td>
      </tr>
    `);

  });

  return `
   
      <div>
         <table>

          <caption>Base Colors</caption>

            <thead>
               <tr>
                  <th>R</th>
                  <th>G</th>
                  <th>B</th>
                  <th>Class</th>
                  <th>Distance</th>
               </tr>
            </thead>

            <tbody>
               ${body}
            </tbody>
         
         </table>
      </div>
   
   `;

}



function getTableNewColor(rgbNewColor, baseColors) {

  baseColors.forEach(baseColor => {

    baseColor.distance = Number(getDistance(rgbNewColor, baseColor).toFixed(2));

  });

  rgbNewColor.classColor = getNewColorClass(rgbNewColor, baseColors);

  return `
   
      <div>
         
         <table>

          <caption>New Color</caption>
         
            <thead>
               <tr>
                  <th>R</th>
                  <th>G</th>
                  <th>B</th>
                  <th>Class</th>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <td>${rgbNewColor.r}</td>
                  <td>${rgbNewColor.g}</td>
                  <td>${rgbNewColor.b}</td>
                  <td>${rgbNewColor.classColor}</td>
               </tr>
            </tbody>
         
         </table>

      </div>
   
   `;

}