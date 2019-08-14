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

  //nav-menu js
  $(document).ready(function(){
    $('.menu').click(function(e){
      e.preventDefault();
      $('.openMenu').addClass('open');
    })
   })