// add monthly price and time period for specific products
const lease = () => {
    const products = {
        'lpProducts__tile--macbook' : 7224863,
        'lpProducts__tile--iphone' : 7403175,
        'lpProducts__tile--samsung' : 6974213,
        'lpProducts__tile--battlebox' : 7489882,
        'lpProducts__tile--lenovo' : 7251094
    }
    let name_heights = []

    for (const [key, value] of Object.entries(products)) {
        /* let api_url = "https://www.alza.cz/services/restservice.svc/v13/product/" + value  */
        let api_url = "../../js/products/" + value + ".json" 
        
        fetch(api_url)
        .then(response => response.json())
        .then(data => {
            let product_name = data.data.name
            product_name.length > 50 ? (product_name = product_name.slice(0, 47) + "...") : 0
            let product_price = data.data.recommendedForRent.priceWithVat
            product_price = product_price.replace(/\sKč/g, "")
            product_price = product_price + ",-"
            let product_period = data.data.recommendedForRent.buttonDescription

            // add html content
            let create_html = `<p class="body-1"><strong>${product_name}</strong></p>
            <div class="lpProducts__label">
                <span class="lpProducts__price">měsíčně od ${product_price}</span>
                <span class="lpProducts__period">${product_period}</span>
                </div>`
            const wrapper_target = document.querySelector("#landingpage ." + key + " .lpProducts__wrapper")
            const new_item = document.createRange().createContextualFragment(create_html)
            wrapper_target.appendChild(new_item)

            // height of the name element
            let name_height = document.querySelector("#landingpage ." + key + " .body-1").clientHeight
            name_heights.push(name_height)
        })

        // change height of product name
        const change_height = () => {
            console.log('function runned 1')
            const run_height = () => {
                console.log('function runned')
                let max_height = Math.max(...max_height)
                const names = document.querySelectorAll("#landingpage .lpProducts__tile .body-1")
                
                for (let i = 0; i < names.length; i++) {
                    names[i].style.minHeight = max_height + "px"
                    console.log(names[i].clientHeight)
                }
            }

            document.documentElement.classList.contains("layout-0") || document.documentElement.classList.contains("layout-1") ? run_height() : 0
        }

        Object.entries(products).indexOf([key, value]) === Object.entries(products).length - 1 ? change_height() : ('hehe')
    }
}
lease()