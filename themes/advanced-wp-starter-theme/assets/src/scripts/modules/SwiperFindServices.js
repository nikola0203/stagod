// import 'swiper/css/bundle'
// swiper core styles
// import "swiper/css"
// modules styles
// import "swiper/css/pagination"
// import "swiper/css/navigation"

import Swiper from "swiper"
import { Pagination, Navigation } from "swiper/modules"

class SwiperFindServices {
  constructor() {
    this.findServices()
  }

  findServices = () => {
    const slides = document.querySelectorAll(".find-services")

    slides.forEach((slider, index) => {
      slider.classList.add("find-services-" + index)
      slider.parentElement
        .getElementsByClassName("swiper-button-next-find-services")[0]
        .classList.add("swiper-button-next-find-services-" + index)
      slider.parentElement
        .getElementsByClassName("swiper-button-prev-find-services")[0]
        .classList.add("swiper-button-prev-find-services-" + index)

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
          nextEl: ".swiper-button-next-find-services-" + index,
          prevEl: ".swiper-button-prev-find-services-" + index
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
      })
    })
  }
}

export default SwiperFindServices