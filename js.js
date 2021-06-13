let  scrollDur=0;
addEventListener("scroll",(e)=>{
const v=window.scrollY;
scrollDur=v;
rotatePlay(v);
});

rotatePlay=(v)=>{
if(v<360){
$("#ctn").css("transform","rotate("+v+"deg)");
}
}

const getQr=(el)=>{
  return document.querySelector(el);
}
const handleMouse=(e)=>{
  scrollDur+=50;
  rotatePlay(scrollDur);
}
onload=()=>{
  
  $("hr").css("width","100%");
  $("#sayHi img").css("width","100px").css("opacity","1").parent("#sayHi").css("justify-content","space-around");


 getQr("#ctn").addEventListener("click",handleMouse);

let menu=true;
$("#men").click(function(){
  if(menu){
  $(this).parent("nav").css("background","rgba(221, 203, 233, 0.932)");
  $("#menu").css("height","40%").css("border","border-bottom:3px solid rgb(255, 0, 85)");
  menu=false
  }
  else{
    menu=true;
    $(this).parent("nav").css("background","");
    $("#menu").css("height","0%") .css("border","none");
  }
})

}

function viewPg(title="app",info={"js":"50%","php":"50%"}){
let output=` 
<div id="pop">
  <div  id="ctnPop">
<button title="close" class="back">x</button>
<h2> ${title}  </h2>

<p>Technology used</p>
<div class="p">
<div style="width:${info.js}" class="js"></div>
<div style="width:${info.php}" class="php"></div>
<div style="width:${info.angular}" class="angularJs"></div>
<div style="width:${info.jquery} " class="jqueryJs"></div>
<div style="width:${info.react}" class="reactJs"></div>
<div style="width:${info.sql}"  class="sql"></div>

</div>
<br><br>
<div id="expln">
<div title="php : server side programing language" class="phpe"><button></button><span>PHP</span></div>
<div title="JavaScript : Programing Language for programming web " class="jse"><button></button><span>Javascript</span></div>
<div title="angular.Js : Powerfull Javascript FrameWork" class="angularJse"><button></button><span>Angular Js</span></div>
<div title="Jquery.Js : JavaScript Library " class="jqueryJse"><button></button><span>Jquery Js</span></div>
<div title="React.Js : Powerfull Javascript framework created by Facebook" class="reactJse"><button></button><span>React  Js</span></div>
<div title=" SQL : language for designing Database" class="sqle"><button></button><span>dataBase(SQL)</span></div>

</div>
<br><br><br>
<button id="visit"><i class="fa fa-web" ></i> Visit site </button>

</div>
</div>
`
$("body").prepend(output);
$(".back").click(function(){
$("#pop").fadeOut(300);
setTimeout(() => {
  $("#pop").remove();
}, 500);
})
}
