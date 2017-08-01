function getToday()
{
    today="Today is "
    var d = new Date();
    d = d.toDateString();
    today = today.concat(d);
    return today;
}

function decideWeek()
{
  month = new Date().getMonth()+1;
  day = new Date().getDate();
if(month==1)
    {
        if(day<=5)
            week="Week 8";
        else if(day>=8&&day<=12)
            week="Week 9";
        else if(day>=15&&day<=19)
            week="Week 10";
        else if(day>=22&&day<=26)
            week="Week 11";
        else if(day>=29)
            week="Week 12";
        else{week=""}
    }
else if(month==2)
    {
        if(day<=2)
            week="Week 12";
        else if(day>=5&&day<=9)
            week="Week 1";
        else if(day>=12&&day<=16)
            week="Week 2";
        else if(day>=19&&day<=23)
            week="Week 3";
        else if(day>=26)
            week="Week 4";
        else{week=""}
    }
else if(month==3)
    {
        if(day<=2)
            week="Week 4";
        else if(day>=5&&day<=9)
            week="Week 5";
        else if(day>=12&&day<=16)
            week="Week 6";
        else if(day>=19&&day<=23)
            week="Week 7";
        else if(day>=26&&day<=30)
            week="Week 8";
        else{week=""}
    }
else if(month==4)
    {
        if(day>=2&&day<=6)
            week="Week 9";
        else if(day>=9&&day<=13)
            week="Week 10";
        else if(day>=16&&day<=20)
            week="Week 11";
        else if(day>=23&&day<=27)
            week="Week 12";
        else if(day>=30)
            week="Week 1";
        else{week=""}
    }
else if(month==5)
    {
        if(day<=4)
            week="Week 1";
        else if(day>=7&&day<=11)
            week="Week 2";
        else{week=""}
    }
else if(month==6)
    {
        {week=""}
    }
else if(month==7)
    {
        {week=""}
    }
else if(month==8)
    {
        if(day>=21&&day<=25)
            week="Week 1";
        else if(day>=28)
            week="Week 2";
        else{week=""}
    }
else if(month==9)
    {
        if(day<=1)
            week="Week 2";
        else if(day>=4&&day<=8)
            week="Week 3";
        else if(day>=11&&day<=15)
            week="Week 4";
        else if(day>=18&&day<=22)
            week="Week 5";
        else if(day>=25&&day<=29)
            week="Week 6";
        else{week=""}
    }
else if(month==10)
    {
        if(day>=2&&day<=6)
            week="Week 7";
        else if(day>=9&&day<=13)
            week="Week 8";
        else if(day>=16&&day<=20)
            week="Week 9";
        else if(day>=23&&day<=27)
            week="Week 10";
        else if(day>=30)
            week="Week 11";
        else{week=""}
    }
else if(month==11)
    {
        if(day<=3)
            week="Week 11";
        else if(day>=6&&day<=10)
            week="Week 12";
        else if(day>=13&&day<=17)
            week="Week 1";
        else if(day>=20&&day<=24)
            week="Week 2";
        else if(day>=27)
            week="Week 3";
        else{week=""}
    }
else if(month==12)
    {
        if(day<=1)
            week="Week 3";
        else if(day>=4&&day<=8)
            week="Week 4";
        else if(day>=11&&day<=15)
            week="Week 5";
        else if(day>=25&&day<=29)
            week="Week 6";
        else{week="";}
    }
else{week="Error!"}
return week;
}

function pickSchedule()
{
    week = decideWeek();
    day = new Date().getDay();
    if(day==0)
        {decide="su";}
    else if(day==2||day==4||day==6)
        {decide="trs";}
    else if(day==1)
        {
            if(week.localeCompare("Week 1")==0||week.localeCompare("Week 3")==0)
                {decide="m13";}
            else if(week.localeCompare("Week 2")==0||week.localeCompare("Week 4")==0)
                {decide="m24";}
            else if(week.localeCompare("Week 5")==0||week.localeCompare("Week 7")==0)
                {decide="m57";}
            else if(week.localeCompare("Week 6")==0||week.localeCompare("Week 8")==0)
                {decide="m68";}
            else if(week.localeCompare("Week 9")==0||week.localeCompare("Week 11")==0)
                {decide="m911";}
            else if(week.localeCompare("Week 10")==0||week.localeCompare("Week 12")==0)
                {decide="m1012";}
            else{decide=pickRandom();}
        }
    else if(day==3)
        {
        if(week.localeCompare("Week 1")==0||week.localeCompare("Week 3")==0)
            {decide="w13";}
        else if(week.localeCompare("Week 2")==0||week.localeCompare("Week 4")==0)
            {decide="w24";}
        else if(week.localeCompare("Week 5")==0||week.localeCompare("Week 7")==0)
            {decide="w57";}
        else if(week.localeCompare("Week 6")==0||week.localeCompare("Week 8")==0)
            {decide="w68";}
        else if(week.localeCompare("Week 9")==0||week.localeCompare("Week 11")==0)
            {decide="w911";}
        else if(week.localeCompare("Week 10")==0||week.localeCompare("Week 12")==0)
            {decide="w1012";}
        else{decide=pickRandom();}
        }
        else if(day==5)
        {
           if(week.localeCompare("Week 1")==0||week.localeCompare("Week 3")==0)
                {decide="f13";}
            else if(week.localeCompare("Week 2")==0||week.localeCompare("Week 4")==0)
                {decide="f24";}
            else if(week.localeCompare("Week 5")==0||week.localeCompare("Week 7")==0)
                {decide="f57";}
            else if(week.localeCompare("Week 6")==0||week.localeCompare("Week 8")==0)
                {decide="f68";}
            else if(week.localeCompare("Week 9")==0||week.localeCompare("Week 11")==0)
                {decide="f911";}
            else if(week.localeCompare("Week 10")==0||week.localeCompare("Week 12")==0)
                {decide="f1012";}
            else{decide=pickRandom();}
        }

    return decide;
}

function pickRandom()
{
        random = Math.floor(Math.random()*10);
        if(random<2.5)
            week = "m13";
        else if(random>=2.5&&random<=5)
            week = "f13";
        else if(random>5&&random<=7.5)
            week = "w13";
        else if(random>7.5&&random<=10)
            week = "trs";
        else
            week = "su";
    return week;
}

function _timer(callback)
{
    var time = 0;     //  The default time of the timer
    var mode = 1;     //    Mode: count up or count down
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;
 
        if(status == 0)
        {
            status = 1;
            mode = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 86400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        generateTime(time);
    }
    
    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmode)
    {
        mode = tmode;
    }
    
    // This methode return the current value of the timer
    this.getTime = function()
    {
        return time;
    }
    
    // This methode return the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }
    
    // This methode return the status of the timer running (1) or stoped (1)
    this.getStatus
    {
        return status;
    }
    
    // This methode will render the time variable to hour:minute:second format
    function generateTime()
    {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;
        var hour = Math.floor(time / 3600) % 60;
        
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        hour = (hour < 10) ? '0'+hour : hour;
        
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
        $('div.timer span.hour').html(hour);
    }
}
 
// example use
var timer;
 
$(document).ready(function(e) 
{
    timer = new _timer
    (
        function(time)
        {
            if(time == 0)
            {
                timer.stop();
                alert('time out');
            }
        }
    );
    timer.reset(0);
    timer.mode(0);
});
