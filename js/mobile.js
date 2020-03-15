var mob = /iPhone|iPad|Android/i.test(navigator.userAgent);
var elem = document.getElementById('app-web-head');
var elem1 = document.getElementById('visit-project');
var elem2 = document.getElementById('web-mobile');
if(mob){
  elem.innerHTML = "Download the Application";
  elem2.innerHTML = "To visit the <strong>website</strong> instead of downloading the application, <a href="https://finlytics.000webhostapp.com/" target="_blank">Click Here</a>";
}
else{
  elem.innerHTML = "Check Out the Website";
  elem1.href= "https://finlytics.000webhostapp.com/";
}
