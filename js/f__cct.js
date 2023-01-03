document.getElementById('pushCCT').addEventListener('click', function(event) {
    event.preventDefault()

    // loading state
    form_loading() 

    // CCT Settings - For Testing Switch Value of the createCCT to false
    /* const cct_settings = {
        questionId: 570,
        createCCT: false,
        emailFrom: user_email,
        emailTo: 'ladislav.sedlacek2@alza.cz',
        phone: user_phone,
        name: user_name,
        subject: 'Alza NEO - ' + user_name + ' (' + company_name +')',
        text: 'IČO: ' + company_number + '\nMáme zájem o: \n' + message
    } */

    callSvc('SendGeneralHelpdeskQuestion', {
            questionId: 570,
            createCCT: false,
            emailFrom: form_email.value,
            emailTo: 'ladislav.sedlacek2@alza.cz',
            phone: form_phone.value,
            name: form_name.value,
            subject: 'Alza NEO - ' + form_name.value + ' (' + form_company_name.value +')',
            text: 'IČO: ' + form_company_number.value + '\nMáme zájem o: \n' + form_message.value
        }, true, function(result) {
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
        }
    )
})