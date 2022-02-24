<script>
		var myIndex = 0;
		carousel();

		function carousel() {
 			var i;
  			var x = document.getElementsByClassName("image");
  			for (i = 0; i < x.length; i++) {
    		x[i].style.display = "none";  
  		}
  		myIndex++;
  		if (myIndex > x.length) {
  			myIndex = 1
  		}    
  		x[myIndex-1].style.display = "block";  
  		setTimeout(carousel, 2000); // Change image every 2 seconds
		}

		var mybutton = document.getElementById("myBtn");
		window.onscroll = function() {scrollFunction()};
		function scrollFunction() {
  			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    			mybutton.style.display = "block";
  			} 
  			else {
    			mybutton.style.display = "none";
  			}
		}
		function topFunction() {
  			document.body.scrollTop = 0;
  			document.documentElement.scrollTop = 0;
		}
	</script>
