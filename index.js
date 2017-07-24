function decideWeek()
{
  if(  ((month==8) && ((day>=21)&&(day<=25)) || ((month==9) && ((day>=4)&&(day<=8)))))
        { var week= "Weeks 1 & 3";}
  if( ((month==8)&&((day>=28)&&(day<=31))) || ((month==9)&&(day==1)) || ((month==9)&&((day>=11)&&(day<=15)))
        { var week= "Weeks 2 & 4"}
  if( ((month==8)&&((day>=21)&&(day<=25))) || ((month==9)&&(day>=4&&day<=8))
        { var week= "Weeks 5 & 7";}
  if( ((month==8)&&(day>=21&&day<=25)) || ((month==9)&&(day>=4&&day<=8))
        { var week= "Weeks 6 & 8";}
  if( ((month==8)&&(day>=21&&day<=25)) || ((month==9)&&(day>=4&&day<=8))
        { var week= "Weeks 9 & 11";}
  if( ((month==8)&&(day>=21&&day<=25)) || ((month==9)&&(day>=4&&day<=8))
        { var week= "Weeks 10 & 12";}
  else{ var week="Day off!!";}
  return week;
}
function getTimeRemaining(endtime) 
{  
  var t = Date.parse(endtime) - Date.parse(new Date()); 
  var seconds = Math.floor((t / 1000) % 60);  
  var minutes = Math.floor((t / 1000 / 60) % 60); 
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);  
  var days = Math.floor(t / (1000 * 60 * 60 * 24));  
  return {    'total': t,    'days': days,    'hours': hours,    'minutes': minutes,    'seconds': seconds  };}

function initializeClock(id, endtime) 
{  
  var clock = document.getElementById(id);  
  var daysSpan = clock.querySelector('.days');  
  var hoursSpan = clock.querySelector('.hours');  
  var minutesSpan = clock.querySelector('.minutes');  
  var secondsSpan = clock.querySelector('.seconds');
  function updateClock() 
{    
  var t = getTimeRemaining(endtime);    
  daysSpan.innerHTML = t.days;   
  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);    
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);    
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);    
  if (t.total <= 0) {      clearInterval(timeinterval);    }  
} 
  updateClock();  
var timeinterval = setInterval(updateClock, 1000);}
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
