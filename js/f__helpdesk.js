const run_helpdesk = () => {
    const helpdesk_stack = document.querySelectorAll('#landingpage .js-lp-showSendHelpdeskQuestionDialog')
    helpdesk_stack.forEach(element => {
        element.onclick = event => {
            event.preventDefault()
            const question_id = element.getAttribute('data-question-id')
            new Promise((resolve) => {
                const question_id = element.getAttribute('data-question-id')
                if (window.location.href.includes("m.alza") || window.location.href.includes("mbeta.alza")) {
                    Alza.Mobile.Components.Partial.Dialogs.Contact.HelpdeskQuestionDetailDialog.show(34, question_id, false)
                } else {
                    HelpDeskQuestion.showSendHelpdeskQuestionDialog({
                        questionGroupId: 34,
                        questionId: question_id,
                        showGroupQuestions: true,
                        forceQuestionNameAsTitle: false
                    })
                }
                resolve()
            }).then(() => setTimeout(() => {
                if (question_id == '191') {
                    const buttons = document.querySelectorAll('.modalSwitcher__button')
                    buttons.forEach(button => {
                        button.addEventListener('click', () => {
                            const buttonClasses = button.getAttribute('class')
                            const event = button.getAttribute('data-event')
                            const classButton = "modalSwitcher__button--active"
                            const classContent = "modalNewContent--show"
    
                            if (!buttonClasses.includes(classButton)) {
                                const activeButton = document.querySelector('.' + classButton)
                                activeButton.classList.remove(classButton)
                                button.classList.add(classButton)
    
                                const contentActive = document.querySelector('.' + classContent)
                                contentActive.classList.remove(classContent)
                                const findContent = document.querySelector('.' + event)
                                findContent.classList.add(classContent)
                            }
                        })
                    })
                }
            }, 100))
        }
    })
}
run_helpdesk()