// Select color input
// Select size input
 const width = document.querySelector('#inputHeight');
 const hieght = document.querySelector('#inputWidth');
 const color = document.querySelector('#colorPicker');
 const pixelCanvas = document.querySelector('#pixelCanvas');
const submit = document.querySelector('#submitsize')
// When size is submitted by the user, call makeGrid()

submit.addEventListener('click', makeGrid());

function makeGrid() {
//creat table
  for (let i = 1; i <= hieght; i++) {
      const tablerow = document.createElement('tr');
      pixelCanvas.appendChild(tablerow);
      for (let i = 1; i <= width; i++){
        const tablecol = document.createElement('td');
        pixelCanvas.appendChild(tablecol);
      }
  }

  document.body.appendChild(pixelCanvas);
  table.addEventListener('click', respondToTheClick);

}



function respondToTheClick(evt) {
   evt.target.color === color;
}
