var c = document.getElementById("Partie2Exercice1");
var ctx = c.getContext("2d");

// Dimensions de Partie2Exercice1 : 400px x 400px


// Cornet de glace
ctx.beginPath(); // Débute un chemin
ctx.moveTo(200,400);
ctx.lineTo(150,250);
ctx.lineTo(250,250);
ctx.closePath();
ctx.fillStyle = "#AA6522";
ctx.fill();

ctx.beginPath();
ctx.moveTo(150,250);
ctx.bezierCurveTo(175,200,225,150,250,250);
ctx.stroke();
ctx.closePath();
ctx.fillStyle = "#8A0908";
ctx.fill();
