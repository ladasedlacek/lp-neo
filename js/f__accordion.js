// accordion
$(".lpFAQs > .lpFAQs__wrapper > .lpFAQs__paragraph").hide(),
$(".lpFAQs > .lpFAQs__wrapper").click(function (e) {
    if (!$(e.target).closest(".faqsHeadline").length) return;
    return (
        $(this).hasClass("lpFAQs__wrapper--active")
            ? $(this).removeClass("lpFAQs__wrapper--active").find(".lpFAQs__paragraph").slideUp()
            : ($(".lpFAQs > .lpFAQs__wrapper > .lpFAQs__paragraph").slideUp(), $(".lpFAQs > .lpFAQs__wrapper.lpFAQs__wrapper--active").removeClass("lpFAQs__wrapper--active"), $(this).addClass("lpFAQs__wrapper--active").find(".lpFAQs__paragraph").slideDown()),
        !1
    );
})

// switcher
/* const button_target = document.querySelectorAll('.lpSwitcher__button')

button_target.forEach(function(element) {
    element.addEventListener("click", function(event) {
        event.preventDefault()
        if (this.classList.contains('lpSwitcher--true') === true) {
            
        } if else {

        } else {

        }
        this.classList.contains('lpSwitcher__button--active') === true ? this.classList.remove('lpSwitcher__button--active') : this.classList.add('lpSwitcher__button--active')
        this.classList.toggle('lpSwitcher__button--active')
        document.querySelector('.lpSwitcher__button--active').classList.remove('lpSwitcher__button--active')
        document.querySelector('.lpFAQs--active').classList.remove('lpFAQs--active')
        element.classList.add('lpSwitcher__button--active')
        let get_attribute = element.getAttribute('href')
        document.querySelector(get_attribute).classList.add('lpFAQs--active')
    })
}) */


const lpSwitchers = document.querySelectorAll('.lpSwitcher')

lpSwitchers.forEach(lpSwitcher => {
    const lpSwitcherButtons = lpSwitcher.querySelectorAll('.lpSwitcher__button')

    lpSwitcherButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()
            if (!button.classList.contains('lpSwitcher--true')) {
                lpSwitcherButtons.forEach(otherButton => {
                    otherButton.classList.toggle('lpSwitcher--true')
                    otherButton.classList.toggle('lpSwitcher--false')
                })
            }
        })
    })
})
