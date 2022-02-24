<script >
		class DisclosureButton {
  			constructor(buttonNode) {
    			this.buttonNode = buttonNode;
    			this.controlledNode = false;

    			var id = this.buttonNode.getAttribute('aria-controls');

    			if (id) {
      				this.controlledNode = document.getElementById(id);
    			}

   				this.buttonNode.setAttribute('aria-expanded', 'false');
    			this.hideContent();

    			this.buttonNode.addEventListener('click', this.onClick.bind(this));
    			this.buttonNode.addEventListener('focus', this.onFocus.bind(this));
    			this.buttonNode.addEventListener('blur', this.onBlur.bind(this));
  			}

  			showContent() {
   				if (this.controlledNode) {
      			this.controlledNode.style.display = 'block';
    			}
  			}

  			hideContent() {
    			if (this.controlledNode) {
      				this.controlledNode.style.display = 'none';
    			}
  			}

  			toggleExpand() {
    			if (this.buttonNode.getAttribute('aria-expanded') === 'true') {
      				this.buttonNode.setAttribute('aria-expanded', 'false');
      				this.hideContent();
    			} 
    			else {
      				this.buttonNode.setAttribute('aria-expanded', 'true');
      				this.showContent();
    			}
  			}


  			onClick() {
    			this.toggleExpand();
  			}

  			onFocus() {
    			this.buttonNode.classList.add('focus');
  			}

  			onBlur() {
    			this.buttonNode.classList.remove('focus');
  			}
		}

		window.addEventListener('load',
  			function () {
    			var buttons = document.querySelectorAll('button[aria-expanded][aria-controls]');
				for (var i = 0; i < buttons.length; i++) {
      				new DisclosureButton(buttons[i]);
   			 	}
  			},
  			false
		);

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
