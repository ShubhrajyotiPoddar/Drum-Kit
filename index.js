function tittyPress(k) {
  switch (k) {
    case "w":
      var sounds = new Audio("sounds/tom-1.mp3");
      sounds.play();
      break;
    case "a":
      var sounds = new Audio("sounds/tom-2.mp3");
      sounds.play();
      break;
    case "s":
      var sounds = new Audio("sounds/tom-3.mp3");
      sounds.play();
      break;
    case "d":
      var sounds = new Audio("sounds/tom-4.mp3");
      sounds.play();
      break;
    case "j":
      var sounds = new Audio("sounds/snare.mp3");
      sounds.play();
      break;
    case "k":
      var sounds = new Audio("sounds/crash.mp3");
      sounds.play();
      break;
    case "l":
      var sounds = new Audio("sounds/kick-bass.mp3");
      sounds.play();
      break;
    default:
      break;
  }
}
var drum = document.querySelectorAll(".drum");
for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", function () {
    var text = this.innerText;
    // console.log(text);
    tittyPress(text);
    litUp(text);
  });
}
document.addEventListener("keypress", function (e) {
  // console.log(e.key);
  var key = e.key;
  tittyPress(key);
  litUp(key);
});
function litUp(Kpress) {
  var box = document.querySelector("." + Kpress);
  box.classList.add("pressed");
  setTimeout(function () {
    box.classList.remove("pressed");
  }, 100);
}

//BONUS
document.querySelector("#title").addEventListener("click", function () {
  var sounds = new Audio("sounds/Yame.mp3");
  sounds.play();
});
