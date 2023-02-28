//detecting button press
var event = $(".drum"); //selects all HTML elements with class drum

event.on("click",handleClick);   //adds event listener to the variable "event" when clicked


function handleClick() {
  var buttonInnerHTML = $(this).html();   //"this" is the identity of button that gets clicked
  play(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}




//detecting keyboard press
//event listener is added to the entire document
$(document).keydown(function (e){ //e stores the details of the event that triggered the event listener
  play(e.key);
  buttonAnimation(e.key);
});



//function for playing sound
function play(key){
  switch (key) {
    case "w":
      var audio0 = new Audio("sounds/crash.mp3");
      audio0.play();
      break;

    case "a":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;

    case "s":
      var audio2 = new Audio("sounds/snare.mp3");
      audio2.play();
      break;

    case "d":
    var audio3 = new Audio("sounds/tom-1.mp3");
    audio3.play();
    break;

    case "j":
      var audio4 = new Audio("sounds/tom-2.mp3");
      audio4.play();
      break;

    case "k":
      var audio5 = new Audio("sounds/tom-3.mp3");
      audio5.play();
      break;

    case "l":
      var audio6 = new Audio("sounds/tom-4.mp3");
      audio6.play();
      break;

    default: console.log(buttonInnerHTML);

  }
}



function buttonAnimation(key) {
  var activeButton = $("." + key);
  activeButton.addClass("pressed");

  setTimeout(function (){
    activeButton.removeClass("pressed");
  }, 100); //delay amount in milliseconds
}
