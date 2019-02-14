  $(document).ready(function(){
    $('#back').click(function()
    {    $('#calendar').hide(500);
         $('h1').hide(500);
          setTimeout(function () 
          {
          createCalendar(-1);
          }, 500);
      
         $('#calendar').delay(200).show(500);
         $('h1').delay(200).show(500);
    });

    $('#next').click(function()
    {    $('#calendar').hide(500);
         $('h1').hide(500);
          setTimeout(function () 
          {
          createCalendar(+1);
          }, 500);
      
         $('#calendar').delay(200).show(500);
         $('h1').delay(200).show(500);
    });
       //background: 

    }); 

    $('td').mouseenter(function(){
    if ($(this).css('background-color')!="rgb(175, 26, 26)" && $(this).css('background-color')!="rgb(255, 255, 255)") 
    {    
      
         $(this).css('background-color','#1d9206'); 
         $(this).css('cursor','pointer')
    }
  });
    $('td').mouseleave(function(){
    if ($(this).css('background-color')!="rgb(175, 26, 26)" && $(this).css('background-color')!="rgb(255, 255, 255)") 
    {    
      
         $(this).css('background-color','#58c561'); 
    }
    });
