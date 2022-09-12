const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

var typed = new Typed(".typing",{
	strings: ["Web Developer", " Digital Marketer", "Video Editor" ],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
})
var typed = new Typed(".typing-2",{
	strings: ["Web Developer", " Digital Marketer", "Video Editor" ],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})