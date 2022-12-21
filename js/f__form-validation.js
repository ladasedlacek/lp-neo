const form_company_name = document.getElementById('lpForm_company_name')
const form_name = document.getElementById('lpForm_name')
const form_company_number = document.getElementById('lpForm_company_number')
const form_email = document.getElementById('lpForm_email')
const form_phone = document.getElementById('lpForm_telephone')
const form_message = document.getElementById('lpForm_message')
const form_gdpr = document.getElementById('lpForm_gdpr')
const form_submit = document.getElementById('lpForm_submit')
const verify_class = 'lpInputVerrify'
const error_class = 'lpForm__errorMessage--active'
const input_stack = [form_company_name, form_name, form_company_number]

// validation - company name / name / company number
input_stack.forEach(element => {
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

/* form_submit.addEventListener('click', function() {

}) */