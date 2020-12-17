
//detect click
var totdrums=document.querySelectorAll(".drum").length;
for(var i=0;i<totdrums;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
   var btnHTML=this.innerHTML;
   makeSound(btnHTML);
   btnanimation(btnHTML);
  });
}

//detect keyboard press
document.addEventListener("keypress",function(event){        //keydown
   makeSound(event.key);
   btnanimation(event.key);
});


function makeSound(key){

  switch (key) {
    case "w":
       var tom1=new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;
     case "a":
       var tom2=new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;
     case "s":
       var tom3=new Audio("sounds/tom-3.mp3");
       tom3.play();
       break;
     case "d":
       var tom4=new Audio("sounds/tom-4.mp3");
       tom4.play();
       break;
     case "j":
       var crash=new Audio("sounds/crash.mp3");
       crash.play();
       break;
     case "k":
       var snare=new Audio("sounds/snare.mp3");
       snare.play();
       break;
     case "l":
       var kick=new Audio("sounds/kick-bass.mp3");
       kick.play();
       break;

    default: console.log(key);
  }

}


function btnanimation(currkey){
   var activebtn= document.querySelector("."+currkey);
   activebtn.classList.add("pressed");
   setTimeout(function(){
     activebtn.classList.remove("pressed");
   },100);
}


// var aud=new Audio("sounds/crash.mp3");
// aud.play();

// ------or------------

// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick(){
//   alert("i got clicked");
// }
