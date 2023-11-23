class NavMenu {
  constructor() {
    this.init()
  }

  init() {
    const thisClass = this

    window.addEventListener('load', function () {
      thisClass.primaryNavMenuMobile()
      thisClass.primaryNavMenuDesktop()
    })

    // thisClass.fixTopMenu()
  }

  primaryNavMenuMobile() {
    if (window.innerWidth < 1201) {
      const navtoggle = document.querySelectorAll('.navtoggle'),
        menu_item_has_children_link = document.querySelectorAll('.menu-item-has-children > a i')


      navtoggle.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
          e.preventDefault()
          $(this).toggleClass('navtoggle--active')
          $('#primary-menu-container').stop(true, true).slideToggle(300)
        })
      })

      menu_item_has_children_link.forEach(function (item, index) {
        // $(".menu-item-has-children > a i").each(function(index, element){
        $(item).on('click', function (e) {
          e.preventDefault()
          $(item).parent().stop(true, true).toggleClass('active')
          $(item).parent().next('.sub-menu').stop(true, true).slideToggle(200)
        })
      })
    }
  }

  primaryNavMenuDesktop() {
    if (window.innerWidth > 1200) {
      const menu_item_has_children = document.querySelectorAll('.menu-item-has-children')

      menu_item_has_children.forEach(function (item, index) {
        $(item).hover(function () {
          $(item).find('> a').stop(true, true).addClass('active')
          $(item).find('> .sub-menu').stop(true, true).css("display", "grid")
        }, function () {
          $(item).find('> a').stop(true, true).removeClass('active')
          $(item).find('> .sub-menu').stop(true, true).css("display", "none")
        })
      })
    }
  }

  fixTopMenu() {
    const nav_menu = document.getElementById('masthead')

    window.addEventListener('scroll', function () {
      if (window.innerWidth > 1200) {
        if (document.documentElement.scrollTop > 110) {
          nav_menu.className = "fixed-top bg-secondary shadow scroll-active";
        } else {
          nav_menu.className = "fixed-top";
        }
      }
    })
  }
}

export default NavMenu
