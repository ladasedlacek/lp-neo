document.getElementById('pushCCT').addEventListener('click', function(event) {
    event.preventDefault()

    // loading state
    form_loading() 

    // create CCT
    setTimeout(function() {
        // CCT Settings - For Testing Switch Value of the createCCT to false
        const cct_settings = {
            questionId: 570,
            createCCT: true,
            emailFrom: form_email.value,
            emailTo: 'ladislav.sedlacek2@alza.cz',
            phone: form_phone.value,
            name: form_name.value,
            subject: 'Alza NEO - ' + form_name.value + ' (' + form_company_number.value +')',
            text: 'IČO: ' + form_company_number.value + '\nMáme zájem o: \n' + form_message.value
        }

        callSvc('SendGeneralHelpdeskQuestion', cct_settings, true, function(result) {
                // Successfull
                const status_success = () => {
                    form.classList.remove('lpForm__wrapper--active')
                    document.querySelector('.lpForm__statusMessage--sucess').classList.add('lpForm__statusMessage--active')
                    console.log('Formulář byl úspěšně odeslán')
                    reset_form()
                    return false
                }

                // Error
                const status_error = () => {
                    form.classList.remove('lpForm__wrapper--active')
                    document.querySelector('.lpForm__statusMessage--error').classList.add('lpForm__statusMessage--active')
                    console.log('Při odesílání formuláře došlo k chybě')
                    reset_form()
                }

                result.ErrorLevel == 0 ? status_success() : status_error()
            }
        )
    }, 1200)
})