// import 'swiper/css/bundle'
// swiper core styles
import "swiper/css";
// modules styles
import "swiper/css/pagination";
import "swiper/css/navigation";

import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

window.addEventListener("load", function () {
  serachUsers();
});

function serachUsers() {
  const slides = document.querySelectorAll(".search-users");

  slides.forEach(function (slider, index) {
    slider.classList.add("search-users-" + index);
    slider.parentElement
      .getElementsByClassName("swiper-button-next-search-users")[0]
      .classList.add("swiper-button-next-search-users-" + index);
    slider.parentElement
      .getElementsByClassName("swiper-button-prev-search-users")[0]
      .classList.add("swiper-button-prev-search-users-" + index);

    // console.log(slider.getElementsByClassName('swiper-pagination')[0])

    new Swiper(".search-users-" + index, {
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
        nextEl: ".swiper-button-next-search-users-" + index,
        prevEl: ".swiper-button-prev-search-users-" + index
      },
      // Responsive breakpoints
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 4
        },
        // 1400: {
        //   slidesPerView: 3,
        //   spaceBetween: 150
        // },
      }
    });
  });
}