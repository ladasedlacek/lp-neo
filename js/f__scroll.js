const links = document.querySelectorAll("#landingpage .scrollTo")
links.forEach(element => {
    element.onclick = (event) => {
        console.log('test scroll')
        event.preventDefault()
        const attr_href = element.getAttribute('href')
        const element_target = document.querySelector(attr_href).offsetTop
        window.scrollTo({ 
            top: element_target -100, 
            left: 0,
            behavior: 'smooth'
        })
    }
})