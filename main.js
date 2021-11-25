// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

ctx.fillStyle = "white";

let y = 365;
for (n = 1; n <= 7; n++) {
    ctx.fillRect(32, y, 90, 20);
    y += 40;
}

let x = 35;
for (num = 1; num <= 4; num++) {
    y = 210;
    for (n = 1; n <= 6; n++) {
        ctx.fillRect(x, y, 12, 12);
        y += 22;
    }
    x += 25;
}

x = 165;
for (n = 1; n <= 5; n++) {
    ctx.fillRect(x, 115, 10, 525);
    x += 25;
}

