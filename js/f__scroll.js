window.onload = () => {
    // links to anchor
    const link_scroll = () => {
        const links = document.querySelectorAll("#landingpage .scrollTo")
        links.forEach(element => {
            element.onclick = (event) => {
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
    }
    link_scroll()
}
