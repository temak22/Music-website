        /* When the user clicks on the button, 
		toggle between hiding and showing the dropdown content */
		function myFunction() {
			document.getElementById("myDropdown").classList.toggle("show");
			document.getElementById("myContent").classList.toggle("not-show");
		}
		
		// Close the dropdown if the user clicks outside of it
		window.onclick = function(event) {
		  if (!event.target.matches('.dropbtn')) {
			var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
			  var openDropdown = dropdowns[i];
			  if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			  }
			}
	  
			var contents = document.getElementsByClassName("content");
			var i;
			for (i = 0; i < contents.length; i++) {
			  var closeContents = contents[i];
			  if (closeContents.classList.contains('not-show')) {
				closeContents.classList.remove('not-show');
			  }
			}
		  }
		}