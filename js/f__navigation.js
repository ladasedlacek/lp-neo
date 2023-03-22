const navigation = document.querySelector('.lpNav')
const menu_button = document.querySelector('.lpNav__menuIcon')
const menu_wrapper = document.querySelector('.lpNav__wrapper')
const menu_svg = document.querySelector('.lpMenuSvg')
const right_side = document.querySelector('.lpNav__right')
const mobile_button = `<a href='#' class='lpNav__menuIcon lpNav__menuIcon--open'>
<svg><use class='lpMenuSvg' xlink:href='#icon-menu'></use></svg>
</a>`

// open / close
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

// Sticky Navigation
function run_sticky() {
  const sticky_desktop = () => {
    const new_header = document.querySelector('.header-alz2')
    const old_header = document.getElementById('header')
    const nav_bar = document.querySelector('.lpNav')

    const for_new = () => {
      if (new_header.classList.contains('header-alz3') && !nav_bar.classList.contains('lpNav--sticky')) {
        const new_header_contains = document.querySelector('.header-alz3')
        const new_header_height = new_header_contains.getBoundingClientRect().height
        nav_bar.classList.add('lpNav--sticky')
        nav_bar.style.top = new_header_height + 'px'
      } else if (!new_header.classList.contains('header-alz3') && nav_bar.classList.contains('lpNav--sticky')) {
        nav_bar.classList.remove('lpNav--sticky')
        nav_bar.style.removeProperty('top')
      }
    }

    const for_old = () => {
      if (old_header.classList.contains('fixed') && !nav_bar.classList.contains('lpNav--sticky')) {
        const old_header_contains = document.querySelector('.fixed')
        const old_header_height = old_header_contains.getBoundingClientRect().height
        nav_bar.classList.add('lpNav--sticky')
        nav_bar.style.top = old_header_height + 'px'
      } else if (!old_header.classList.contains('fixed') && nav_bar.classList.contains('lpNav--sticky')) {
        nav_bar.classList.remove('lpNav--sticky')
        nav_bar.style.removeProperty('top')
    }
  }
    langResult === 'cs-CZ' ? for_new() : for_old()
  }

  const sticky_mobile = () => {
    window.pageYOffset == 0 ? navigation.classList.remove('lpNav--stickyMobile') : navigation.classList.add('lpNav--stickyMobile')
  }

  window.location.href.indexOf('mbeta.alza.cz') != -1 || window.location.href.indexOf('m.alza.cz') != -1 ? sticky_mobile() : sticky_desktop()
}
window.addEventListener('scroll', run_sticky)