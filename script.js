// /*==================== MENU SHOW Y HIDDEN ====================*/
// const navMenu = document.getElementById("nav-menu"),
// 		navToggle = document.getElementById("nav-toggle")
// 		navClose = document.getElementById("nav-close")

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if(navToggle){
// 	navToggle.addEventListener("click", () => {
// 		navMenu.classList.add("show-menu")
// 	})
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if(navClose){
// 	navClose.addEventListener("click", () =>{
// 		navMenu.classList.remove("show-menu")
// 	})
// }

// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
// 	const navMenu = document.getElementById('nav-menu')
// 	// When we click on each nav__link, we remove the show-menu class
// 	navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader(){
	const nav = document.getElementById('header')
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

// var swiper = new Swiper(".mySwiper", {
// 	cssMode: true,
// 	navigation: {
// 	  nextEl: ".swiper-button-next",
// 	  prevEl: ".swiper-button-prev",
// 	},
// 	pagination: {
// 	  el: ".swiper-pagination",
// 	},
// 	mousewheel: true,
// 	keyboard: true,
// });

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
});

let step1 = document.querySelector('.assignment1');
let step1show = document.querySelectorAll(".step2show");
let closeButton1 = document.getElementById('closeButton2');
let opened1 = false;
step1.addEventListener('click', function() {
	if (!opened1) {
		step1.style.width = "80%";
		step1.style.height = "100%";
		document.querySelector('.words1').style.display = "none";
		setTimeout (() => {
			for (var i = 0; i<2; i++) {
				step1show[i].style.display = "flex";
			}
		}, 200);
		setTimeout (() => {
			step1show[2].style.display = "block";
		}, 1000);
		// step1.style.background = "#373737";
		opened1 = true;
	}
});


closeButton1.addEventListener('click', function() {
	step1.style.width = "50%";
	step1.style.height = "70%";
	
	for (var i = 0; i<3; i++) {
		step1show[i].style.display = "none";
	}
	// step1.style.background = "#207794";
	setTimeout(() => {
		document.querySelector('.words1').style.display = "block";
		opened1 = false;
	}, 1000)
})



// function update(e){								//to get the coordinates of the mouse positiona nd update the flashlight

// 	var x = e.clientX || e.touches[0].clientX;
// 	var y = e.clientY || e.touches[0].clientY;
// 	console.log(x,y);
// 	var style = document.querySelector('.assignmentphoto').style;

// 	style.setProperty('--cursorX', x - 500 + 'px');
// 	style.setProperty('--cursorY', y - 200  + 'px');
	

// }

// document.querySelector('.assignmentphoto').addEventListener('mousemove',update)
// document.querySelector('.assignmentphoto').addEventListener('touchmove',update)
