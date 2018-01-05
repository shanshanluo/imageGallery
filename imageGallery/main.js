var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

  for (var i=1; i<=5; i++) {
	  var image = document.createElement('img');
		image.setAttribute('src', 'images/pic'+i+'.jpg');
		thumbBar.appendChild(image);
		image.onclick = function(event) {
		  displayedImage.setAttribute('src', event.target.getAttribute('src'));	
		}
	}

/* Wiring up the Darken/Lighten button */
  btn.onclick = function() {
	  var brightnessCMD = btn.getAttribute('class');
	  if(brightnessCMD === 'Darken') {
		  // display dark style
			overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
			btn.setAttribute('class', 'Light');
			btn.innerHTML = 'Lighten';
		} else {
		  //display light style
			overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
			btn.setAttribute('class', 'Darken');
			btn.innerHTML = 'Darken';
		}	
	}
