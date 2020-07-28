const items = document.querySelectorAll(".accordion button");

	function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');
	
	for (i = 0; i < items.length; i++) {
		items[i].setAttribute('aria-expanded', 'false');
	}
	
	if (itemToggle == 'false') {
		this.setAttribute('aria-expanded', 'true');
	}
	}

	items.forEach(item => item.addEventListener('click', toggleAccordion));


	const input = document.getElementById("search-input");
	const searchBtn = document.getElementById("search-btn");
	
	const expand = () => {
	  searchBtn.classList.toggle("close");
	  input.classList.toggle("square");
	};
	
	searchBtn.addEventListener("click", expand);
	