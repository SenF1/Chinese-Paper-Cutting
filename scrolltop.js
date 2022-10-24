// Get the button
let mybutton = document.getElementById("btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

var halfheight = document.documentElement.scrollHeight/3;

function scrollFunction() {
  if (document.body.scrollTop > halfheight || 
	document.documentElement.scrollTop > halfheight) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top if click button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}