function decideWeek()
{
  month = new Date().getMonth()+1;
  date = new Date().getDate();
  day = new Date().getDay()+1;
  
if(day>=1&&day<=10)
{var week= "Hello";}
  else if(day>10&&day<=20)
  {var week="Goodbye";}
  else
  {var week="Else Statement.";}
  return week;
}
