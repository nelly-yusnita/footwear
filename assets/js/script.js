// ===== SHOW MENU ===== //
const menuButton = document.getElementById('menu-button'),
		navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () =>{
	navMenu.classList.toggle('show-menu');
	menuButton.classList.toggle('close-menu');
})
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu')
	menuButton.classList.remove('close-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header')

	if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ==== TESTIMONIAL SWIPER ===== //
let swiperTestimonial = new Swiper(".testimonial__container", {
 	loop: true,
 	grabCursor: true,
 	spaceBetween: 28,

 	pagination: {
 		el: ".swiper-pagination",
 		clickable: true,
 		dynamicBullets: true,
 	},

 	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	}
 });
// ==== end testimonial swiper ==== //

// ===== SHOW CART ===== //
const cart = document.getElementById('cart'),
		cartShop = document.getElementById('cart-shop'),
		cartClose = document.getElementById('cart-close');

// Cart Show
// Validate if constant exists
if(cartShop){
	cartShop.addEventListener('click', () =>{
		cart.classList.add('show-cart')
	})
}

// Cart Hidden
// Validate if constant exists
if(cartClose){
	cartClose.addEventListener('click', () =>{
		cart.classList.remove('show-cart')
	})
}
// ===== end show cart ===== //

// ===== SHOW SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	
	if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end show scroll up ===== //

// ===== AOS ANIMATE ===== //
const productBox = document.querySelectorAll('.product__box');
productBox.forEach((n, i) => {
	n.dataset.aos = 'zoom-in';
	n.dataset.aosDelay = i * 100;
});

const sectionTitle = document.querySelectorAll('.section__title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

const fiturContent = document.querySelectorAll('.fitur__content');
fiturContent.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

const bestsellerContent = document.querySelectorAll('.bestseller__content');
bestsellerContent.forEach((n, i) => {
	n.dataset.aos = 'flip-right';
	n.dataset.aosDelay = i * 100;
});

const contactBox = document.querySelectorAll('.contact__box');
contactBox.forEach((n, i) => {
	n.dataset.aos = 'flip-up';
	n.dataset.aosDelay = i * 100;
});

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end animate ===== //

