onload=()=>{
  /*const intro=['a FullStack WebDevloper','Web Designer','FrontEnd Developer','Backend Developer'];
action("#body","scroll",(e)=>{
scroll=window.scrollY;
console.log(scroll);
const animate=false;

if(scroll<70){
  }
})


let width=0;
function animateNow(){
const elWidth= getQr(".animateV").style.width
if(elWidth>0){
 width--
}
else{
width++;
}
console.log(width);
requestAnimationFrame(animateNow);
}//end function
*/

let open=true;
$("nav #openMenu,aside #close").click(function(){
  if(open){
    if(window.innerWidth>660)return

  $("aside").css("width","100%");
  $("nav #openMenu").attr("class","fa fa-times");
  open=false;
  }
  else{
    $("aside").css("width","0");
  $("nav #openMenu").attr("class","fa fa-reorder");
    open=true;
  }
});


function about(){
  $("#body").animate({scrollTop:getQr("#box section").offsetTop-150},300);
  $("aside").css("width","0");
  $("nav #openMenu").attr("class","fa fa-reorder");
    open=true;
}

function service(){
  $("#body").animate({scrollTop:getQr("#service").offsetTop-40},300);
  $("aside").css("width","0");
  $("nav #openMenu").attr("class","fa fa-reorder");
    open=true;
}

function works(){
  $("#body").animate({scrollTop:getQr("#works").offsetTop-40},300);
  $("aside").css("width","0");
  $("nav #openMenu").attr("class","fa fa-reorder");
    open=true;
}


function contact(){
  $("#body").animate({scrollTop:getQr("footer").offsetTop-40},300);
  $("aside").css("width","0");
  $("nav #openMenu").attr("class","fa fa-reorder");
    open=true;
}

$("#learnMore,#explainArrow,#menuC #showABout,#pcNav #aboutMeBtn").click(function() {
  about();
})
$("#menuC #serviceBtn,#pcNav #serviceBtn").click(function(){
service();
});
$("#menuC #worksBtn,#pcNav #worksBtn").click(function(){
  works();
});
$("#menuC #contactBtn,#pcNav #contactBtn").click(function(){
contact();
});
//about()
}