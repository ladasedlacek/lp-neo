window.onload = () => {
    setTimeout(function() {
        const url = window.location.href
        const index_hash = url.indexOf("#")
        if (index_hash === -1) {
            return 
        } else {
            const final_hash = url.substring(index_hash + 1)
            const element_target = document.getElementById(final_hash)
            element_target.scrollIntoView({ behavior: "smooth" })
        }
    }, 800)
}

window.addEventListener('load', () => {
    const url = window.location.href
})