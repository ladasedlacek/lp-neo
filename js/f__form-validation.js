const form = document.getElementById('lpForm')
const form_company_name = document.getElementById('lpForm_company_name')
const form_name = document.getElementById('lpForm_name')
const form_company_number = document.getElementById('lpForm_company_number')
const form_email = document.getElementById('lpForm_email')
const form_phone = document.getElementById('lpForm_telephone')
const form_message = document.getElementById('lpForm_message')
const form_gdpr = document.getElementById('lpForm_gdpr')
const form_button = document.getElementById('pushCCT')
const check_identity = [form_company_name, form_name, form_company_number, form_phone]
const form_parts = [form_company_name, form_name, form_company_number, form_email, form_phone, form_message, form_gdpr]
const form_labels = document.querySelectorAll('#lpForm label');
const verify_class = 'lpInputVerrify'
const error_class = 'lpForm__errorMessage--active'

// enable / disable button if the form is valid
const button_allowed = () => {
    form_button.classList.remove('btn--dis')
    form_button.removeAttribute('disabled')
}

const button_disabled = () => {
    form_button.classList.contains('btn--dis') ? 0 : (form_button.classList.add('btn--dis'), form_button.disabled = true)
}

// validation - company name / name / company number
form_parts.forEach(element => {
    element.addEventListener('keyup', function() {
        let input_length = this.value
        let label = this.previousElementSibling
        let error_message = this.nextElementSibling 

        const show_success = () => {
            label.classList.add(verify_class)
            error_message.classList.remove(error_class)
            form.checkValidity() === true ? button_allowed() : button_disabled()
        }

        const show_error = () => {
            label.classList.add(error_class)
            label.classList.contains(verify_class) ? label.classList.remove(verify_class) : 0
            error_message.classList.add(error_class)
            form.checkValidity() === true ? button_allowed() : button_disabled()
        }

        if (element == form_gdpr) {
            return
        } else if (element == form_message) {
            element.checkValidity() === true ? error_message.classList.remove(error_class) : show_error()
        } else {
            element.checkValidity() === true ? show_success() : show_error()
        }
    })
})

// validation - GDPR
form_gdpr.addEventListener('click', function() {
    form.checkValidity() === true ? button_allowed() : button_disabled()
})

// loading + disabled inputs (cleared input check)
function form_loading() {
    form_button.classList.add('btn--loading')
    form_parts.forEach(element => {
        element.disabled = true
    })
    form_labels.forEach(label => {
        label.classList.remove('lpInputVerrify');
    })
}

// form reset
document.querySelector('.lpForm__statusMessage .body-2--link').addEventListener('click', function(event) {
    event.preventDefault() 
    form.reset()
    document.querySelector('.lpForm__statusMessage').classList.remove('lpForm__statusMessage--active')
    form.classList.add('lpForm__wrapper--active')
    form_button.classList.remove('btn--loading')
    form_parts.forEach(element => {
        element.disabled = false
    })
})