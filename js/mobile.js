var mob = /iPhone|iPad|Android/i.test(navigator.userAgent);
var elem = document.getElementById('app-web-head');
var elem1 = document.getElementById('visit-project');
var elem2 = document.getElementById('project-icon');
if(mob){
  elem.innerHTML = "Download the Application";
}
else{
  elem.innerHTML = "Check Out the Website!";
  elem1.href= "https://finlytics.000webhostapp.com/";
  elem2.className = "fa fa-search video-play-button";
}
