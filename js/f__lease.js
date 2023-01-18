// add monthly price and time period for specific products
const lease = () => {
    const product_target = document.querySelectorAll('#landingpage .lpProducts .lpProducts__tile')
    let products = []
    let name_heights = []

    // create stack of products
    const get_products = () => {
        for (let element of product_target) {
            let product_classes = element.classList
            let product_name
            for (let class_name of product_classes) {
                if (class_name.startsWith("lpProducts__tile--")) {
                    product_name = class_name
                }
            }
            let product_id = element.getAttribute("data-product-id")
            products.push({ product_name, product_id })
        }
        fill_content()
    }

    // fill content for each product
    const fill_content = () => {
        products.forEach((product) => {
            let api_url = "/services/restservice.svc/v13/product/" + product.product_id  

            fetch(api_url)
            .then(response => response.json())
            .then(data => {
                let product_name = data.data.name
                product_name.length > 50 ? (product_name = product_name.slice(0, 47) + "...") : 0
                let product_price = data.data.priceInfoV2.neoPriceWithVat
                product_price = product_price.replace(/\sKč/g, "")
                product_price = product_price + ",-"
                let product_period = data.data.recommendedForRent.buttonDescription

                // add html content
                let create_html = `<p class="body-1"><strong>${product_name}</strong></p>
                <div class="lpProducts__label">
                    <span class="lpProducts__price">${product_price}</span>
                    <span class="lpProducts__period">${product_period}</span>
                    </div>`
                let wrapper_target = document.querySelector("#landingpage ." + product.product_name + " .lpProducts__wrapper")
                const new_item = document.createRange().createContextualFragment(create_html)
                wrapper_target.appendChild(new_item)

                // add height of the product name to the array
                let name_height = document.querySelector("#landingpage ." + product.product_name + " .body-1").clientHeight
                name_heights.push(name_height)
            })
            .then(() => {
                // set height of the highest name element
                if (products.indexOf(product) === products.length - 1) {
                    setTimeout(() => {
                        let highest_element = Math.max(...name_heights.filter((item, position) => name_heights.indexOf(item) === position))
                        const run_set_height = () => {
                            let all_names = document.querySelectorAll("#landingpage .lpProducts__tile .body-1")
                            all_names.forEach(element => {
                                element.style.minHeight = highest_element + "px"
                            })
                        }
                        window.location.href.indexOf('www.alza') || window.location.href.indexOf('127') ? run_set_height() : 0
                    }, 1000)
                }
            })
        })
    }
    get_products()
   
}
lease()

