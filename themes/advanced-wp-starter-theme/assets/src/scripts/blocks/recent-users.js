// import 'swiper/css/bundle'
// swiper core styles
import "swiper/css";
// modules styles
import "swiper/css/pagination";
import "swiper/css/navigation";

import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

window.addEventListener("load", function () {
  recentUsers();
});

function recentUsers() {
  const slides = document.querySelectorAll(".recent-users");

  slides.forEach(function (slider, index) {
    slider.classList.add("recent-users-" + index);
    slider
      .parentElement.parentElement.getElementsByClassName("swiper-pagination")[0]
      .classList.add("swiper-pagination-" + index);
    slider.parentElement
      .getElementsByClassName("swiper-button-next")[0]
      .classList.add("swiper-button-next-" + index);
    slider.parentElement
      .getElementsByClassName("swiper-button-prev")[0]
      .classList.add("swiper-button-prev-" + index);

    // console.log(slider.getElementsByClassName('swiper-pagination')[0])

    new Swiper(".recent-users-" + index, {
      modules: [Pagination, Navigation],
      // autoHeight: true,
      // slidesPerView: "auto",
      slidesPerView: 1,
      // freeMode: true,
      // centeredSlides: true,
      // loop: true,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-button-next-" + index,
        prevEl: ".swiper-button-prev-" + index
      },
      // Responsive breakpoints
      breakpoints: {
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