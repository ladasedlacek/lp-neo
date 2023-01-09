const links = document.querySelectorAll("#landingpage .scrollTo")
links.forEach(element => {
    element.onclick = (event) => {
        event.preventDefault()
        const attr_href = element.getAttribute('href')
        const target_element = document.querySelector(attr_href)
        const target_position = target_element.getBoundingClientRect().top - 150
        window.scrollTo({
            top: target_position,
            behavior: "smooth"
        })
    }
})