const navigation_wrapper = document.querySelector(".lpNavWrapper")
const navigation = document.querySelector('.lpNav')
const menu_button = document.querySelector('.lpNav__menuIcon')
const menu_wrapper = document.querySelector('.lpNav__wrapper')
const menu_svg = document.querySelector('.lpMenuSvg')
const right_side = document.querySelector('.lpNav__right')
const mobile_button = `<a href="#" class="lpNav__menuIcon lpNav__menuIcon--open">
<svg><use class="lpMenuSvg" xlink:href="#icon-menu"></use></svg>
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
    const create_div = document.createElement("div")
    create_div.classList.add("lpNav__menu")
    navigation.appendChild(create_div)
    const navigation_items = document.querySelector('.lpNav__right .lpNav__items')
    create_div.appendChild(navigation_items)
  }
  document.querySelector('.mobile') || document.querySelector('.mobileapp') ? create_menu() : console.log('Menu nebylo vytvořeno 2')
}
mobile_menu()

// Sticky Navigation
function run_sticky() {
  const sticky_desktop = () => {
    document.querySelector('#header').classList.contains('fixed') ? navigation.classList.add('lpNav--sticky') : navigation.classList.remove('lpNav--sticky')
    console.log('Desktop')
  }

  const sticky_mobile = () => {
    window.pageYOffset == 0 ? navigation.classList.remove('lpNav--stickyMobile') : navigation.classList.add('lpNav--stickyMobile')
    console.log('Mobile')
  }

  window.location.href.indexOf('www.alza.cz') != -1 ? sticky_desktop() : sticky_mobile()
}
window.addEventListener("scroll", run_sticky)