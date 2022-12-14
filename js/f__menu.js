const menu_button = document.querySelector('.lpNav__menuIcon')
const menu_target = document.querySelector('.lpNav__menu')
const menu_svg = document.querySelector('.lpMenuSvg')

menu_button.addEventListener('click', function(event) {
    event.preventDefault()
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