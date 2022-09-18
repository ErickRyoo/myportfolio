const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

const body = document.querySelector("body"),
      modeToggle = document.querySelector(".dark-light");

	  let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

		  modeToggle.addEventListener("click" , () =>{
			modeToggle.classList.toggle("active");
			body.classList.toggle("dark");

			if(!body.classList.contains("dark")){
				localStorage.setItem("mode" , "light-mode");
			}else{
				localStorage.setItem("mode" , "dark-mode");
			}
		  });

window.addEventListener ("scroll", function() {
	body.classList.toggle ("sticky", window.scrollY >0);
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

	function SendMail(){
		var params = {
			from_name : document.getElementById("fullName").value,
			email_id :document.getElementById("email_id").value,
			subject :document.getElementById("subject").value,
			message : document.getElementById("message").value
		}
		emailjs.send("service_ofrwue3", "template_faq0h1g", params).then(function (res) {
			alert("Sucess! " + res.status);
		})
	}

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})