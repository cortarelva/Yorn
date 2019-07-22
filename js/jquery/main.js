/*$(function(){
  let val = $('.input').val();
  let prog = $('.progress');
  $('#assign').on('click',() =>{
    alert(val);
    prog.style.width = val;
    
  })
  
})*/

function move() {
  var elem = document.getElementsById("assign"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}