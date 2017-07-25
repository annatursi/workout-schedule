function decideWeek()
{
  month = new Date().getMonth()+1;
  date = new Date().getDate();
  day = new Date().getDay()+1;
  var line = "Today's date is: "
if(day>=1&&day<=10)
{var week= line.concat(day);}
  else if(day>10&&day<=20)
  {var week="Goodbye";}
  else
  {var week="Else Statement.";}
  return week;
}
