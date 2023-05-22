const navigation = document.querySelector('.lpNav')
const menu_button = document.querySelector('.lpNav__menuIcon')
const menu_wrapper = document.querySelector('.lpNav__wrapper')
const menu_svg = document.querySelector('.lpMenuSvg')
const right_side = document.querySelector('.lpNav__right')
const mobile_button = `<a href='#' class='lpNav__menuIcon lpNav__menuIcon--open'>
<svg><use class='lpMenuSvg' xlink:href='#icon-menu'></use></svg>
</a>`

// mobile menu toggle
menu_button.addEventListener('click', function(event) {
    event.preventDefault()
    const menu_target = document.querySelector('.lpNav__menu')

    const open_menu = () => {
        menu_target.classList.add('lpNav__menu--open')
        menu_svg.setAttribute('xlink:href', '#icon-close')
        menu_button.classList.remove('lpNav__menuIcon--open')
        menu_button.classList.add('lpNav__menuIcon--close')
    }

    const close_menu = () => {
        menu_target.classList.remove('lpNav__menu--open')
        menu_svg.setAttribute('xlink:href', '#icon-menu')
        menu_button.classList.add('lpNav__menuIcon--open')
        menu_button.classList.remove('lpNav__menuIcon--close')
    }
    
    menu_button.classList.contains('lpNav__menuIcon--open') === true ? open_menu() : close_menu()
})

// switch content on the mobile platform
const mobile_menu = () => {
  const create_menu = () => {
    const create_div = document.createElement('div')
    create_div.classList.add('lpNav__menu')
    navigation.appendChild(create_div)
    const navigation_items = document.querySelector('.lpNav__right .lpNav__items')
    create_div.appendChild(navigation_items)
  }
  document.querySelector('.mobile') || document.querySelector('.mobileapp') ? create_menu() : 0
}
mobile_menu()

// sticky navigation
const sticky_nav = () => {
  const nav_height = 100
  const navigation = document.querySelector('.lpNav')

  // desktop navgation
  const desktop = () => {
    window.addEventListener('scroll', () => {
      const page_offset = window.pageYOffset

      if (page_offset >= nav_height) {
        navigation.classList.add('lpNav--sticky')
      } else if (page_offset < nav_height && navigation.classList.contains('lpNav--sticky')) {
        navigation.classList.remove('lpNav--sticky')
      } 
    })
  }

  // mobile navigation
  const mobile = () => {
    const header = document.querySelector('header')
    const nav_class = 'lpNav--stickyMobile'

    window.addEventListener('scroll', () => {
      let page_offset = window.pageYOffset
      page_offset == 0 ? navigation.classList.remove(nav_class) : navigation.classList.add(nav_class)
    })

    const header_height_change = () => {
      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const new_height = entry.target.offsetHeight
          if (navigation.classList.contains(nav_class)) {
            const sticky_mobile = document.querySelector('.' + nav_class)
            new_height > 66 ? sticky_mobile.style.top = '113px' : sticky_mobile.style.top = '66px'
          }
        })
      })
    
      observer.observe(header)
    }
    header_height_change()
  }

  window.location.href.indexOf('mbeta.alza.cz') != -1 || window.location.href.indexOf('m.alza.cz') != -1 ? mobile() : desktop()
}
sticky_nav()