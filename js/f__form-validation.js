const form_company_name = document.getElementById('lpForm_company_name')
const form_name = document.getElementById('lpForm_name')
const form_company_number = document.getElementById('lpForm_company_number')
const form_email = document.getElementById('lpForm_email')
const form_phone = document.getElementById('lpForm_telephone')
const form_message = document.getElementById('lpForm_message')
const form_gdpr = document.getElementById('lpForm_gdpr')
const form_submit = document.getElementById('lpForm_submit')

// company name validation
form_company_name.addEventListener('keyup', function() {
    let input_length = this.value
    input_length.length >= 3 ? console.log(true) : console.log(false)
})

