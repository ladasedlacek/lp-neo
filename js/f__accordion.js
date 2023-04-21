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
const button_target = document.querySelectorAll('.lpAccordion__button')

button_target.forEach(function(element) {
    element.addEventListener("click", function(event) {
        event.preventDefault()
        document.querySelector('.lpAccordion__button--active').classList.remove('lpAccordion__button--active')
        document.querySelector('.lpFAQs--active').classList.remove('lpFAQs--active')
        element.classList.add('lpAccordion__button--active')
        let get_attribute = element.getAttribute('href')
        document.querySelector(get_attribute).classList.add('lpFAQs--active')
    })
})
