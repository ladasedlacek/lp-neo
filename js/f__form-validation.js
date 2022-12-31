const form = document.getElementById('lpForm')
const form_company_name = document.getElementById('lpForm_company_name')
const form_name = document.getElementById('lpForm_name')
const form_company_number = document.getElementById('lpForm_company_number')
const form_email = document.getElementById('lpForm_email')
const form_phone = document.getElementById('lpForm_telephone')
const form_button = document.getElementById('lpForm_button')
const identity = [form_company_name, form_name, form_company_number]
const verify_class = 'lpInputVerrify'
const error_class = 'lpForm__errorMessage--active'

// validation - company name / name / company number
identity.forEach(element => {
    element.addEventListener('keyup', function() {
        let input_length = this.value
        let label = this.previousElementSibling
        let error_message = this.nextElementSibling 

        input_length.length >= 3 ? (label.classList.add(verify_class), error_message.classList.remove(error_class)) : 0
        label.classList.contains(verify_class) === true && input_length.length < 3 ? (label.classList.remove(verify_class), error_message.classList.add(error_class)) : 0
    })
})

// validation - phone
form_phone.addEventListener('keyup', function() {
    let input_length = this.value
    let label = this.previousElementSibling
    let error_message = this.nextElementSibling

    input_length.length >= 8 ? (label.classList.add(verify_class), error_message.classList.remove(error_class)) : 0
    label.classList.contains(verify_class) === true && input_length.length < 8 ? (label.classList.remove(verify_class), error_message.classList.add(error_class)) : 0
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

// submit form
function form_event(event) { 
    event.preventDefault() 
    clearInterval(check_validation)
    console.log('Formulář odeslán')
} 
form.addEventListener('submit', form_event)

// form reset
document.querySelector('.lpForm__statusMessage .body-2--link').addEventListener('click', function(event) {
    event.preventDefault() 
    form.reset()
    setInterval(check_validation, 100)
    document.querySelector('.lpForm__statusMessage').classList.remove('lpForm__statusMessage--active')
    form.classList.add('lpForm__wrapper--active')
})