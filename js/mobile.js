var mob = /iPhone|iPad|Android/i.test(navigator.userAgent);
var elem = document.getElementById('app-web-head');
if(mob){
  elem.innerHTML = "Download the Application";
}
else{
  elem.innerHTML = "Check Out the Application";
}