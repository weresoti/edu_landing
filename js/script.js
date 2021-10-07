/* SLider */

new Swiper ('.swiper-container',{
	/*pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},*/
	/*navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},*/
	/*centeredSlides: true,*/
	spaceBetween: 20,
	slidesPerView: 4,
  // slidesPerGroup: 1,
	watchOverflow: true,
	initialSlide: 0,
	/*loop: true,*/
	/*autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	},*/
   breakpoints: {
      320: {
			slidesPerView: 1,
      },
		600: {
			slidesPerView: 2.5,
		},
		1200: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		}
   }
});




/* Spoiler */

let acc = document.getElementsByClassName("questions__item___btn-wrapper");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let text = this.nextElementSibling;
        if (text.style.display === "block") {
				text.style.display = "none";
        } else {
				text.style.display = "block";
        }
    });
}



/* Burger */

document.querySelector('.header__burger').onclick = function() {
	document.querySelector('.first-content').classList.toggle('first-content-active')
	document.querySelector('.header-mobile__menu').classList.toggle('header-mobile__menu-active')
	document.querySelector('.header__burger').classList.toggle('active')
	$('body').toggleClass('lock')
 }