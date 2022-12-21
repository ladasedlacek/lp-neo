const navigation = document.querySelector('.lpNav')
const navigation_items = document.querySelector('.lpNav__right .lpNav__items')
const menu_button = document.querySelector('.lpNav__menuIcon')
const menu_wrapper = document.querySelector('.lpNav__wrapper')
const menu_target = document.querySelector('.lpNav__mobileMenu')
const menu_svg = document.querySelector('.lpMenuSvg')
const right_side = document.querySelector('.lpNav__right')
const mobile_button = `<a href="#" class="lpNav__menuIcon lpNav__menuIcon--open">
<svg><use class="lpMenuSvg" xlink:href="#icon-menu"></use></svg>
</a>`

// open / close
menu_button.addEventListener('click', function(event) {
    event.preventDefault()
    const open_menu = () => {
        menu_target.classList.add('lpNav__mobileMenu--open')
        menu_svg.setAttribute('xlink:href', '#icon-close')
        menu_button.classList.remove('lpNav__menuIcon--open')
        menu_button.classList.add('lpNav__menuIcon--close')
    }

    const close_menu = () => {
        menu_target.classList.remove('lpNav__mobileMenu--open')
        menu_svg.setAttribute('xlink:href', '#icon-menu')
        menu_button.classList.add('lpNav__menuIcon--open')
        menu_button.classList.remove('lpNav__menuIcon--close')
    }
    
    menu_button.classList.contains('lpNav__menuIcon--open') === true ? open_menu() : close_menu()
})