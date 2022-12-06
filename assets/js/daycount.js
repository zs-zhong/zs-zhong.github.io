var LoveDate = new Date("Jan 12, 2019 18:00:00");

var x = setInterval(function() {

  var now = new Date();
  var distance = now.getTime() - LoveDate.getTime();
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("count").innerHTML = '<span style="font-size:200%;color:red;">&hearts;</span>' + days + "d ";
  // + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);