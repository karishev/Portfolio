
function scrollHeader(){
	const nav = document.getElementById('header')
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

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

assignments = document.querySelectorAll(".assignment");
assignmentphotos = document.querySelectorAll(".assignmentphoto");
assignmentinfos = document.querySelectorAll(".assignmentinfo");
words = document.querySelectorAll(".words1");
closebuttons = document.querySelectorAll(".closeButton");
let opened = [false,false,false,false,false,false,false,false,false];

document.querySelectorAll(".assignment").forEach(assignemnt => 
	assignemnt.addEventListener("click", () => {
		let indexx = whichone(assignemnt);
		if (!opened[indexx]) {
			assignemnt.style.width = "100%";
			assignemnt.style.height = "100%";
			
			words[indexx].style.display = "none";
			setTimeout (() => {
				assignmentphotos[indexx].style.display = "flex";
				assignmentinfos[indexx].style.display = "flex";
			}, 500);
			setTimeout (() => {
				closebuttons[indexx].style.display = "block";
			}, 1000);
			opened[indexx] = true;
		}
	})
)

document.querySelectorAll(".closeButton").forEach(button =>
	button.addEventListener("click", () => {
		let index1 = whichonebutton(button);
		assignments[index1].style.width = "50%";
		assignments[index1].style.height = "70%";
		assignmentphotos[index1].style.display = "none";
		assignmentinfos[index1].style.display = "none";
		button.style.display = "none";
		setTimeout(() => {
			words[index1].style.display = "block";
			opened[index1] = false;
		}, 1000)
	})
)

let step1 = document.querySelector('.assignment1');
let step1show = document.querySelectorAll(".step2show");
let closeButton1 = document.getElementById('closeButton2');
let opened1 = false;

function whichone(elem) {
	for (var i = 0; i < assignments.length; i++) {
		if (assignments[i] === elem) {
			return i;
		}
	}
}

function whichonebutton(elem) {
	for (var i = 0; i < closebuttons.length; i++) {
		if (closebuttons[i] === elem) {
			return i;
		}
	}
}
