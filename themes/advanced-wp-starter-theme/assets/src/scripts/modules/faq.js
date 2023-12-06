class Faq {
  constructor() {
    this.init()
  }

  init() {
    const thisClass = this

    window.addEventListener('load', function () {
      thisClass.faq('.faq')
    })
  }

  faq(faq_section_class) {
    const faq_section = document.querySelectorAll(faq_section_class);
    if (faq_section.length > 0) {
      faq_section.forEach((faq, index) => {
        const questions = faq.getElementsByClassName("faq__wrapper-question");
        const answers = faq.getElementsByClassName("faq__wrapper-answer");

        for (let c = 0; c < questions.length; c++) {
          questions[c].addEventListener("click", function (e) {
            let icon = this.getElementsByTagName('i')[0];
            // Hide other answers
            for (let i = 0; i < answers.length; i++) {
              if (c !== i) {
                answers[i].style.maxHeight = null;
              }
            }
            // Remove active class from other elements
            for (let i = 0; i < questions.length; i++) {
              if (c !== i) {
                questions[i].classList.remove("active");
                // questions[i].getElementsByTagName('i')[0].classList.remove("icon-minus");
              }
            }

            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }

            // Add active class
            this.classList.toggle("active");
            // if (icon.classList.contains("icon-minus")) {
            //   icon.classList.add("icon-plus");
            // } else {
            //   icon.classList.add("icon-minus");
            // }
          });
        }
      });
    }
    // if ($(faq_section_class).length > 0) {
    //   $(faq_section_class).each(function (index, faq) {
    //     $(faq).find('.faq__wrapper-answer').hide()
    //     $(faq).find('.faq__wrapper-question').on('click', function () {
    //       $(this).next('div').siblings('div').slideUp(400)
    //       $(this).next('div').slideToggle(400)
    //       $(this).siblings('.faq__wrapper-question').find('i').removeClass('icon-minus').addClass('icon-plus')
    //       if ($(this).find('i').hasClass('icon-plus')) {
    //         $(this).find('i').removeClass('icon-plus').addClass('icon-minus')
    //       } else {
    //         $(this).find('i').removeClass('icon-minus').addClass('icon-plus')
    //       }
    //     })
    //   })
    // }
  }
}

export default Faq
