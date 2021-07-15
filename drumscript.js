$(".drum").click(function () {
    let inner = this.innerHTML;
    makeSound(inner);
    animation(inner);
})

document.addEventListener("keypress",(event) => {
    makeSound(event.key)
    animation(event.key)
})


function makeSound(sound) {
   switch(sound) {
    case "w": 
    tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
    tom1 = new Audio("sounds/snare.mp3");
    tom1.play();
    break;
    case "k":
    tom1 = new Audio("sounds/crash.mp3");
    tom1.play();
    break;
    case "l":
    tom1 = new Audio("sounds/kick-bass.mp3");
    tom1.play();
    break;
   } 
}


let animation = (animate) => {
let animatedKey = $(`.${animate}`);
animatedKey[0].classList.add("pressed");
setTimeout(function (test) {
    animatedKey[0].classList.remove("pressed");
},100);
}