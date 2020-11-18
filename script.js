// Init variables. 
var sky = document.getElementById("sky")
var topSky = document.getElementById("topSky")
var ground = document.getElementById("ground")
var lights = document.getElementById("lights")
var nightButton = document.getElementById("night");
let toggle = true;

// function to turn the scene to night time. 
function night(){
    if (toggle) {
        sky.style.background = "darkblue";
        topSky.style.background = "darkblue";
        ground.style.background = "darkgreen";
        lights.style.visibility ="visible";
    } else {
        sky.style.background = "#00b4ff";
        topSky.style.background = " hsl(215, 100%, 57%)e";
        ground.style.background = "darkgreen";
        lights.style.visibility ="hidden";
    }
    toggle = !toggle;
}

// add event listener to call function
nightButton.addEventListener('click',
    night,
    false
);

