function decideWeek()
{
  month = new Date().getMonth()+1;
  date = new Date().getDate();
  day = new Date().getDay()+1;
  var line = "Today's date is: "
if(date>=1&&date<=10)
{var week= line.concat(date);}
  else if(date>10&&date<=20)
  {var week="Goodbye";}
  else
  {var week="Else Statement.";}
  return week;
}
