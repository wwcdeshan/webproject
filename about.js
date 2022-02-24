<script>
		function openNav() {
  			document.getElementById("mySidebar").style.width = "230px";
  			document.getElementById("main").style.marginLeft = "250px";
		}
		function closeNav() {
  			document.getElementById("mySidebar").style.width = "0";
  			document.getElementById("main").style.marginLeft= "0";
		}
		var myIndex1 = 0;
		carousel();

		function carousel() {
 			var i;
  			var x = document.getElementsByClassName("image");
  			for (i = 0; i < x.length; i++) {
    		x[i].style.display = "none";  
  		}
  		myIndex1++;
  		if (myIndex1 > x.length) {
  			myIndex1 = 1
  		}    
  		x[myIndex1-1].style.display = "block";  
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
