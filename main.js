var boxes = document.querySelectorAll(".box");
var s = document.querySelector('.rgbspan');
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
var playbtn = document.querySelector("#playAgain");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var boxCount = 6;
var statusText = document.querySelector(".status");
var startMenu = document.querySelector(".startMenu");
var line = document.querySelector(".line");
var mainBox = document.querySelector(".mainBox");
var reload = document.querySelector("#reload");
statusText.textContent = "";


easyBtn.addEventListener("click", function() {
    
    startMenu.style.display = "none";
    line.style.display = "block";
    mainBox.style.display = "block";
    document.querySelector("h1").style.background = "rgb(233, 119, 119)";

    statusText.textContent = "";

    boxCount = 3;

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    s.textContent = pickedColor;

    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = "none";
        }
    }
});


hardBtn.addEventListener("click", function() {
    
    startMenu.style.display = "none";
    line.style.display = "block";
    mainBox.style.display = "block";

    document.querySelector("h1").style.background = "rgb(233, 119, 119)";

    statusText.textContent = "";

    boxCount = 6;

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    console.log(boxes.length)
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
        boxes[i].style.display = "block";

    }
});

reload.addEventListener("click", function(){
    location.reload();
});


playbtn.addEventListener("click", function() {
    document.querySelector("h1").style.background = "rgb(233, 119, 119)";

    playbtn.textContent = "New Colors";
    statusText.textContent = "";

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * boxCount)];
    s.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }

});


for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function() {
        var selectedColor = this.style.background;
        console.log(selectedColor);
        console.log(pickedColor);
        if (selectedColor === pickedColor) {
            win();

        } else {
            loose(this);
        }
    });
}


function win() {
    for (var i = 0; i < colors.length; i++) {
        boxes[i].style.background = pickedColor;
    }
    document.querySelector("h1").style.background = pickedColor;
    playbtn.textContent = "Play Again !";
    statusText.textContent = "Correct !";
}


function loose(a) {
    console.log(a);
    a.style.background = "#2f2f2f"
    statusText.textContent = "Try Again !";
}


function generateRandomColor(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}