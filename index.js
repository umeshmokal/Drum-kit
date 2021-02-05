for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        playMusic(this.innerHTML);
        addAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",playDrum);

function playDrum(event) {
    playMusic(event.key);
    addAnimation(event.key);
}

function playMusic(key) {
    var audio = "";
    switch (key) {
        case 'w':  audio = "tom-1.mp3";
            break;
        case 'a':  audio = "tom-2.mp3";
            break;
        case 's':  audio = "tom-3.mp3";
            break;
        case 'd':  audio = "tom-4.mp3";
            break;
        case 'j':  audio = "snare.mp3";
            break;
        case 'k':  audio = "kick-bass.mp3";
            break;
        case 'l':  audio = "crash.mp3";
            break;
        default : break;

    }
    var music = new Audio("sounds/" + audio);
    music.play();
}

function addAnimation(key) {
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}

