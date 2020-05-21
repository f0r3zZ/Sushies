document.addEventListener('DOMContentLoaded', function() {
	let burger = document.querySelector('.burger'),
			menu = document.querySelector('.header-nav');
	
	burger.addEventListener('click', function() {
		menu.classList.toggle('showMenu');
		burger.classList.toggle('burgerActive');
	});
})