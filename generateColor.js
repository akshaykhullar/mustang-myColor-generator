var R,G,B;
var rgb = document.getElementById("rgb-text");;
var boxBackground = document.getElementById("color-container");
var submitButton = document.getElementById("generate-color");


submitButton.addEventListener("click", function() {
	R = parseInt(document.getElementById("color-input-R").value);
	G = parseInt(document.getElementById("color-input-G").value);
	B = parseInt(document.getElementById("color-input-B").value);
	var newR = (R * 50) + R;
	var newG = (G * 50) + G;
	var newB = (B * 50) + B;
	console.log(newR + ','+ newG + ',' + newB);
	boxBackground.style.background = 'rgb(' + newR + ',' + newG + ',' + newB + ')';
	rgb.innerHTML = 'RGB ( ' + R + ', ' + G + ', ' + B + ' )';
});
