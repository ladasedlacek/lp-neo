window.onload = () => {
    // links to anchor
    const link_scroll = () => {
        const links = document.querySelectorAll("#landingpage .scrollTo")
        links.forEach(element => {
            element.onclick = (event) => {
                console.log('test scroll')
                event.preventDefault()
                const attr_href = element.getAttribute('href')
                scroll_engine(attr_href)
            }
        })
    }
    link_scroll()

    // url to anchor
    const scroll_engine = (id) => {
        console.log('scroll engine')
        console.log('Jake je to ID - ' + id)
        console.log(document.querySelector(id))
        const element_target = document.querySelector(id).offsetTop
        window.scrollTo({ 
            top: element_target -100, 
            left: 0,
            behavior: 'smooth'
        })
    }

    const url_scroll = () => {
        const url_target = window.location.href
        let get_hash = url_target.substring(url_target.indexOf('#') + 0)
        console.log(get_hash)
        get_hash.length > 1 ? scroll_engine(get_hash) : 0
        
    }
    url_scroll()
}
