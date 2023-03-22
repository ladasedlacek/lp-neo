// show / hide content
const content_toggle = () => {
    const content_button = document.querySelector('.body-1--button')
    
    content_button.addEventListener('click', function(event) {
        event.preventDefault()
        const content_element = document.querySelector('.lpUsps__box .perex span')
        if (content_element.classList.contains('lpUsps__box--more')) {
            content_element.classList.remove('lpUsps__box--more')
            content_element.classList.add('lpUsps__box--less')
        } else {
            content_element.classList.remove('lpUsps__box--less')
            content_element.classList.add('lpUsps__box--more')
        }
    })
}
content_toggle()
