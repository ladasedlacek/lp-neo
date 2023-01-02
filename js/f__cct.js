// Create CCT from the Form
const create_cct = () => {
    // Form Data
    const company_name = form_company_name.value
    const user_name = form_name.value
    const company_number = form_company_number.value
    const user_email = form_email.value
    const user_phone = form_phone.value
    const message = form_message.value

    // CCT Settings - For Testing Switch Value of the createCCT to false
    const cct_settings = {
        questionId: 570,
        createCCT: true,
        emailFrom: user_email,
        emailTo: 'ladislav.sedlacek2@alza.cz',
        phone: user_phone,
        name: user_name,
        subject: 'Alza NEO - ' + user_name + ' (' + company_name +')',
        text: 'IČO: ' + company_number + '\nMáme zájem o: \n' + message
    }

    callSvc('SendGeneralHelpdeskQuestion', cct_settings, true, (result => {
            // Successfull
            const status_success = () => {
                form.classList.remove('lpForm__wrapper--active')
                document.querySelector('.lpForm__statusMessage--sucess').classList.add('lpForm__statusMessage--active')
                console.log('Formulář byl úspěšně odeslán')
                return false
            }

            // Error
            const status_error = () => {
                form.classList.remove('lpForm__wrapper--active')
                document.querySelector('.lpForm__statusMessage--error').classList.add('lpForm__statusMessage--active')
                console.log('Při odesílání formuláře došlo k chybě')
            }

            result.ErrorLevel == 0 ? status_success() : status_error()
        })
    )
}