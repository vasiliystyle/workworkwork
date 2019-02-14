var thisdate=new Date();
var year=thisdate.getFullYear();
var month=thisdate.getMonth();
var m=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октбярь","Ноябрь","Декабрь"];
var selectedDay;
var day;
function createCalendar(shift)
{
  
  var cell=document.getElementsByTagName("td"); //выбираем все ячейки таблицы

  if (shift==-1) //смещение месяца в зависимости от нажатия кнопки
  {
    month-=1;
    if (month==-1)
    {
      year-=1;
      month=11;
    } 
  }
  if (shift==1) 
  {
    month+=1;
    if (month==12) 
    {
      year+=1;
      month=0;
    }
  }

  var d = new Date(year, month); //наша дата
  var firstDay=getDay(d); //номер дня с которого начинается месяц
  var countDays=32-new Date(year,month,32).getDate(); //кол-во дней в месяце
  var dd=0; //переменная для заполения ячеек дней
  var cc=0; //кол-во необходимых ячеек

 if (cell.length-18<countDays+firstDay) 
  {
    cell[cell.length-17].hidden=false; 
    cell[cell.length-18].hidden=false; 
  }
  else
  {
    cell[cell.length-17].hidden=true; 
    cell[cell.length-18].hidden=true; 
  };

  document.getElementById("month").innerHTML=m[month]+" "+year;

  for (var i = 0; i < firstDay; i++) //заполняем все пустые дни в начале месяца
  {
    cell[i].innerHTML="";
    cell[i].id="";
    cell[i].style.background="white";

    $('td:eq('+i+')').empty();
  }

  for (var i = firstDay; i <countDays+firstDay; i++) //заполняем все дни с числами
  {
    dd++;
    cell[i].id=dd;
    cell[i].innerHTML="<b>"+dd+"</b><br><p>16/16</p>";
    cell[i].style.background="#58c561";
    if (firstDay==6 ) 
    {
      cell[i].hidden=false;
    }

  }

  for (var i = countDays+firstDay; i < cell.length; i++) //заполняем все пустые дни в конце месяца
  {
    cell[i].innerHTML="";
    cell[i].id="";
    $('td:eq('+i+')').empty();
    cell[i].style.background="white";
  }

 /* $('td:parent').mouseenter(function(){
  $(this).css('background-color','#1d9206'); 
  });   
  //при выхода за границы ячейки
  $('td:parent').mouseleave(function(){
  $(this).css('background-color','#58c561'); //#a9f3ab 
  });
  $('td:empty').mouseenter(function(){
  $(this).css('background-color','white'); 
  });
  $('td:empty').mouseleave(function(){
  $(this).css('background-color','white'); 
  }); */

};




      function getDay(date) // получить номер дня недели, от 0(пн) до 6(вс)
      { 
        var day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
      };

      function selectDay(id) //Отображение времени при выборе даты
      {
        if (id!=null && id!="") 
        {
         $('#calendar').hide(500);
         $('h1').hide(500);
         var dayX=document.getElementById("month");
         var inptdate=document.getElementById("inputdate");
         day=id;

         setTimeout(function()
         {
          if (+month+1<10) 
            dayX.innerHTML=id+"."+0+(+month+1)+"."+year; 
          else
            dayX.innerHTML=id+"."+(month+1)+"."+year;
            
         },500);
          if (+month+1<10) 
             inptdate.value=id+"."+0+(+month+1)+"."+year;           
          else inptdate.value=id+"."+(month+1)+"."+year;
         $('#dayz').delay(200).show(500);
         $('h1').delay(200).show(500);
         createDays();
        };
      };

      function selectTime(id) //переход на запись нового посетителя после выбора времени
      {
        var cell=document.getElementById(id);
        if (id!=null && id!="" && cell.style.background!="rgb(175, 26, 26)")
        {
          $('#dayz').hide(500);
          $('h1').hide(500);
          var inpttime=document.getElementById("inputtime");
          var dayX=document.getElementById("month");
          inpttime.value=id;
          setTimeout(function()
          {
             dayX.innerHTML="Запись нового посетителя";
          },500);
          $('#reserv').delay(200).show(500);
          $('h1').delay(200).show(500);
        };
      };

      function goBack() //возвращение с времени на выбор даты
      {
         $('#dayz').hide(500);
         $('h1').hide(500);
         var dayX=document.getElementById("month");
         setTimeout(function()
         {
          dayX.innerHTML=m[month]+" "+year;
         },500);         
         $('#calendar').delay(200).show(500);
         $('h1').delay(200).show(500);
      };

      function goBackDate()//Возвращение с заполнения данных на выбор времени
      {
        $('#reserv').hide(500);
        $('h1').hide(500);
        var dayX=document.getElementById("month");
        setTimeout(function()
        {
          if (+month+1<10) 
            dayX.innerHTML=day+"."+0+(+month+1)+"."+year; 
          else
            dayX.innerHTML=day+"."+(month+1)+"."+year;
        },500);
         $('#dayz').delay(200).show(500);
         $('h1').delay(200).show(500);
      }

      function createDays() //заполнение таблицы с возможными временем
      {
        var cell=document.getElementsByClassName("hours"); 
        var h="10";
        var m="00";

        for (var i = 0; i < cell.length; i++) 
        {
          time=h+":"+m;
          cell[i].innerHTML="<h4>"+time+"</h4>";
          cell[i].id=time;
          cell[i].style.background="#58c561";

          if (m==30) 
          {
          m="00";
          h=+h+1;
          }
          else
          m="30";
        };
         cell[4].style.background="rgb(175, 26, 26)";
         cell[9].style.background="rgb(175, 26, 26)";
         cell[11].style.background="rgb(175, 26, 26)";
  /*      $('td:parent').mouseenter(function()
        { 
           if ($(this).css('background-color')!="rgb(175, 26, 26)") 
    {
         $(this).css('background-color','#1d9206'); 
    }
        });   
  //при выхода за границы ячейки
        $('td:parent').mouseleave(function()
        {
          $(this).css('background-color','#58c561'); 
        });*/
      

      };

