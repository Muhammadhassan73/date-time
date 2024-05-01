// var rightNow = new Date();
//  var theDay = rightNow.getDay();
//   console.log(theDay);
// var date = new Date()
// var mSecond1970 = date.getTime()
// console.log("milliseconds=>" , mSecond1970);
// console.log("seconds=>",Math.floor(mSecond1970 / 1000));
// console.log("minutes=>",Math.floor(mSecond1970/1000/60));
// console.log("hours=>",Math.floor(mSecond1970/1000/60/60));
// console.log("days=>",Math.floor(mSecond1970/1000/60/60/24));
// console.log("months=>",Math.floor(mSecond1970/1000/60/60/24/30));
// console.log("years=>",Math.floor(mSecond1970/1000/60/60/24/365));

// var boardExam = new Date()
// boardExam.setDate(8)
// boardExam.setMonth(4)
//  var diff = boardExam.getTime() - mSecond1970
//  console.log(diff / 1000 / 60 / 60 / 24);

 
 function showTime(){
     var date = new Date();
     var h = date.getHours(); // 0 - 23
     var m = date.getMinutes(); // 0 - 59
     var s = date.getSeconds(); // 0 - 59
     var session = "AM";
    
     if(h == 0){
         h = 12;
     }
    
     if(h > 12){
         h = h - 12;
         session = "PM";
     }
    
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;
    
     var time = h + ":" + m + ":" + s + " " + session;
     document.getElementById("MyClockDisplay").innerText = time;
     document.getElementById("MyClockDisplay").textContent = time;
    
     setTimeout(showTime, 1000);
    
 }

 showTime();

    