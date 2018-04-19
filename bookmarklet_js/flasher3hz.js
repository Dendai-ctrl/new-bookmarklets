(function () {
	var add_div = document.createElement('div');
	add_div.setAttribute('id', 'overlay');
	add_div.style.position = "fixed";
	add_div.style.display = "block";
	add_div.style.width = "100%";
	add_div.style.height = "100%";
	add_div.style.top = "0";
	add_div.style.left = "0";
	add_div.style.right = "0";
	add_div.style.bottom = "0";
	add_div.style.backgroundColor = "rgba(0,0,0,0.2)";
	add_div.style.zIndex = "2";
	add_div.style.cursor = "pointer";
	var text_div = document.createElement('div');
	text_div.setAttribute('id', 'text');
    text_div.style.position = "absolute";
	text_div.style.top = "50%";
	text_div.style.left = "50%";
	text_div.style.fontSize = "20px";
	text_div.style.color = "white";
	add_div.appendChild(text_div);
	var text1=document.createTextNode("3 flashes/sec");
	text_div.appendChild(text1);
	
	//add div to top of body
	document.body.insertBefore(add_div, document.body.firstChild);
    setInterval(blink3, 333);

function blink3() {
	var x = document.getElementById("text");
    if (x.style.visibility == "hidden") {
       		 		x.style.visibility = "visible";
    				} else {
        				x.style.visibility = "hidden";
    				}  
}
}
