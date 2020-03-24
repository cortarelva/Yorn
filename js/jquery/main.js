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



//mobile nav
//vanila js version
//selectors
const menubtn = document.querySelector("#menu-button");
const sidenav = document.querySelector("#side-nav");
const closebtn =document.querySelector("#close-btn");

//events
menubtn.addEventListener("click", openNav);
closebtn.addEventListener("click", closeNav);

//functions
function openNav(){
   sidenav.style.width = "100%";
}

function closeNav(){
  sidenav.style.width = "0%";
}


/*
   //mobile nav jquery version

   $(document).ready(function(){
    var counter = 0;
    var x = $('#side-nav');
    var disp = $('#menu-button')
    
    $('.menuButton').click(function(){
      x.css('width', '100%');
      disp.css('display','none');
      counter = 1;
    
    if(counter === 1){
      $('.sidenav-link').click(function(){
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
*/

//js to enable submit button in tarifarios page
  $(document).ready(function(){

    $('.form-submit').attr('disabled','disabled');

    $('.num-input').keyup(function (){
     if('.num-input' !== '') {
       $('.form-submit').removeAttr('disabled').css('background','#D81B60');
     }
    }
  );
});



/*

//js to open modal search window(not finished)
$document.ready(function(){
	$('#search-btn').on ('click', () =>{
		$('.modal-search-container').css('display','flex');
	});
});

*/