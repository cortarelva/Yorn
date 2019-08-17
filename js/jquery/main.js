// slick js
 $(document).ready(function(){
    $('.slick-card-container').slick({
      arrows:false,
      centerMode:true,
      centerPadding: '40px',
      slidesToShow:1,
      focusOnSelect:false,
          
    });
  });


   //mobile nav js

   $(document).ready(function(){
    var counter = 0;
    var x = $('#side-nav');
    var disp = $('#menu-button')
    
    $('.menuButton').click(function(){
      x.css('width', '100%');
      disp.css('display','none');
      counter = 1;
    
    if(counter == 1){
      $('a').click(function(){
        x.css('width', '0px');
        disp.css('display','block');
        counter = 0;
        });     
       }
       x.on('mouseleave',function(){
       x.css('width','0px'); 
       disp.css('display','block');
       counter = 0;
      });
    });
  })



  $(document).ready(function(){

    $('.form-submit').attr('disabled','disabled');

    $('.num-input').keyup(function (){
     if('.num-input' !== '') {
       $('.form-submit').removeAttr('disabled').css('background','#D81B60');
     }
    }
  );
});