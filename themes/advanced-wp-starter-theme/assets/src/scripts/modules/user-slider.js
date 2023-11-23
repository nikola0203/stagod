// import 'swiper/css/bundle'
// swiper core styles
import "swiper/css";
// modules styles
import "swiper/css/pagination";
import "swiper/css/navigation";

import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

class UserSlider {
  constructor() {
    this.init();
  }

  init() {
    const thisClass = this;

    window.addEventListener("load", function () {
      thisClass.authorGallery();
    });
  }

  authorGallery() {
    const slides = document.querySelectorAll(".author-gallery");

    slides.forEach(function (slider, index) {
      slider.classList.add("author-gallery-" + index);
      slider
        .parentElement.parentElement.getElementsByClassName("swiper-pagination")[0]
        .classList.add("swiper-pagination-" + index);
      slider
        .getElementsByClassName("swiper-button-next")[0]
        .classList.add("swiper-button-next-" + index);
      slider
        .getElementsByClassName("swiper-button-prev")[0]
        .classList.add("swiper-button-prev-" + index);

      // console.log(slider.getElementsByClassName('swiper-pagination')[0])

      new Swiper(".author-gallery-" + index, {
        modules: [Pagination, Navigation],
        // autoHeight: true,
        // slidesPerView: "auto",
        slidesPerView: 1,
        // freeMode: true,
        // centeredSlides: true,
        // loop: true,
        spaceBetween: 24,
        pagination: {
          el: ".swiper-pagination-" + index,
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next-" + index,
          prevEl: ".swiper-button-prev-" + index
        },
        // Responsive breakpoints
        breakpoints: {
          992: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          },
          // 1400: {
          //   slidesPerView: 3,
          //   spaceBetween: 150
          // },
        }
      });
    });
  }

  // heroSlider() {
  // 	$(".slider-home-hero").each(function(index, element){
  // 		$(this).addClass("slider-home-hero-" + index)

  // 		let speed = $(this).data('speed'),
  // 				autoplay_delay = $(this).data('autoplay_delay')

  // 		new Swiper(".slider-home-hero-" + index, {
  // 			modules: [Autoplay],
  // 			slidesPerView: 1,
  // 			spaceBetween: 60,
  // 			loop: true,
  // 			speed: speed,
  // 			autoplay: {
  // 				delay: autoplay_delay,
  // 				disableOnInteraction: false,
  // 			},
  // 		})
  // 	})
  // }
}

export default UserSlider;