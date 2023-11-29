// import 'swiper/css/bundle'
// swiper core styles
import "swiper/css";
// modules styles
import "swiper/css/pagination";
import "swiper/css/navigation";

import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

window.addEventListener("load", function () {
  findServices();
});

function findServices() {
  const slides = document.querySelectorAll(".find-services");

  slides.forEach(function (slider, index) {
    slider.classList.add("find-services-" + index);
    slider.parentElement
      .getElementsByClassName("swiper-button-next")[0]
      .classList.add("swiper-button-next-" + index);
    slider.parentElement
      .getElementsByClassName("swiper-button-prev")[0]
      .classList.add("swiper-button-prev-" + index);

    // console.log(slider.getElementsByClassName('swiper-pagination')[0])

    new Swiper(".find-services-" + index, {
      modules: [Pagination, Navigation],
      // autoHeight: true,
      // slidesPerView: "auto",
      slidesPerView: 3,
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
          slidesPerView: 6
        },
        1200: {
          slidesPerView: 10
        }
        // 1400: {
        //   slidesPerView: 3,
        //   spaceBetween: 150
        // },
      }
    });
  });
}