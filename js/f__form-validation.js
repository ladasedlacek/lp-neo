const form = document.getElementById('lpForm')
const form_company_name = document.getElementById('lpForm_company_name')
const form_name = document.getElementById('lpForm_name')
const form_company_number = document.getElementById('lpForm_company_number')
const form_email = document.getElementById('lpForm_email')
const form_phone = document.getElementById('lpForm_telephone')
const form_message = document.getElementById('lpForm_message')
const form_gdpr = document.getElementById('lpForm_gdpr')
const form_button = document.getElementById('lpForm_button')
const check_identity = [form_company_name, form_name, form_company_number, form_phone]
const form_parts = [form_company_name, form_name, form_company_number, form_email, form_phone, form_message, form_gdpr]
const form_labels = document.querySelectorAll('#lpForm label');
const verify_class = 'lpInputVerrify'
const error_class = 'lpForm__errorMessage--active'

// validation - company name / name / company number
form_parts.forEach(element => {
    element.addEventListener('keyup', function() {
        let input_length = this.value
        let label = this.previousElementSibling
        let error_message = this.nextElementSibling 

        const show_success = () => {
            label.classList.add(verify_class), 
            error_message.classList.remove(error_class)
        }

        const show_error = () => {
            label.classList.add(error_class), 
            error_message.classList.add(error_class)
        }

        if (element == form_gdpr) {
            return
        } else if (element == form_company_number) {
            input_length = input_length.match(/^\d{4,}$/)
            input_length == null ? show_error() : show_success()
        } else if (element == form_email) {
            input_length = input_length.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            input_length == null ? show_error() : show_success()
        } else if (element == form_phone) {
            input_length = input_length.match(/^\+?\d{10,}$/)
            input_length == null ? show_error() : show_success()
        } else if (element == form_message) {
            input_length.length >= 5 ? error_message.classList.remove(error_class) : show_error()
        } else {
            input_length.length >= 4 ? show_success() : show_error()
        }
    })
})

// validation - email
form_email.addEventListener('keyup', function() {
    let input_length = this.value
    let label = this.previousElementSibling
    let error_message = this.nextElementSibling
    input_length = input_length.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    input_length === null ? 0 : (label.classList.add(verify_class), error_message.classList.remove(error_class))
    input_length === null && label.classList.contains(verify_class) === true ? (label.classList.remove(verify_class), error_message.classList.add(error_class)) : 0
})

// check validation every 100 ms
function check_validation() {
    const button_allowed = () => {
        form_button.classList.remove('btn--dis')
        form_button.removeAttribute('disabled')
    }

    const button_disabled = () => {
        form_button.classList.contains('btn--dis') ? 0 : (form_button.classList.add('btn--dis'), form_button.disabled = true)
    }

    form.checkValidity() === true ? button_allowed() : button_disabled()
}
setInterval(check_validation, 100)

// loading + disabled inputs (cleared input check)
function form_loading() {
    clearInterval(check_validation)
    form_button.classList.add('btn--loading')
    form_parts.forEach(element => {
        element.disabled = true
    })
    form_labels.forEach(label => {
        label.classList.remove('lpInputVerrify');
    })
}

// submit form
function form_event(event) { 
    event.preventDefault() 
    form_loading() 
    setTimeout(create_cct, 1500)
} 
form.addEventListener('submit', form_event)

// form reset
document.querySelector('.lpForm__statusMessage .body-2--link').addEventListener('click', function(event) {
    event.preventDefault() 
    form.reset()
    setInterval(check_validation, 100)
    document.querySelector('.lpForm__statusMessage').classList.remove('lpForm__statusMessage--active')
    form.classList.add('lpForm__wrapper--active')
    form_button.classList.remove('btn--loading')
    form_parts.forEach(element => {
        element.disabled = false
    })
})