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
                // remove content if product in not available
                const remove_box = () => {
                    let product_box = document.querySelector("#landingpage ." + product.product_name)
                    product_box.remove()
                    console.log('Product - ' + product.product_name + ' (' + product.product_id + ')' + ' was removed from the LP Neo.')
                }

                // fill content
                const add_box = () => {
                    let product_name = data.data.name
                    product_name.length > 50 ? (product_name = product_name.slice(0, 47) + "...") : 0
                    let product_price = data.data.priceInfoV2.neoPriceWithVat

                    // select lang
                    if (window.location.hostname.includes(".cz")) {
                        product_price = product_price.replace(/\sKč/g, "")
                        product_price = product_price + ",-"
                    } else if (window.location.hostname.includes(".sk")) {
                        product_price = product_price.replace("měsíčně od", "mesačne od")
                    }
    
                    // add html content
                    let name_target = document.querySelector("#landingpage ." + product.product_name + " .body-1")
                    let price_target = document.querySelector("#landingpage ." + product.product_name + " .lpProducts__price")
                    name_target.innerHTML = product_name
                    price_target.innerHTML = product_price
    
                    // add height of the product name to the array
                    let name_height = document.querySelector("#landingpage ." + product.product_name + " .body-1").clientHeight
                    name_heights.push(name_height)
                    console.log('Product - ' + product.product_name + ' (' + product.product_id + ')' + ' was added to the LP Neo.')
                }

                data.data.availabilityStatus == -1 ? remove_box() : add_box()
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

