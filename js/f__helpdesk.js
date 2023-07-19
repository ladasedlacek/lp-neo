const run_helpdesk = () => {
    const helpdesk_stack = document.querySelectorAll('#landingpage .js-lp-showSendHelpdeskQuestionDialog')
    helpdesk_stack.forEach(element => {
        element.onclick = event => {
            event.preventDefault()
            console.log('Clicked - ' + element)
            const question_id = element.getAttribute('data-question-id')
            new Promise((resolve) => {
                HelpDeskQuestion.showSendHelpdeskQuestionDialog({
                    questionGroupId: 34,
                    questionId: question_id,
                    showGroupQuestions: true,
                    forceQuestionNameAsTitle: false
                })
                resolve()
            }).then(() => setTimeout(() => {
                const buttons = document.querySelectorAll('.modalSwitcher__button')
                buttons.forEach(button => {
                    button.addEventListener('click', () => {
                        const event = button.getAttribute('data-event')
                        const classButton = "modalSwitcher__button--active"
                        const classContent = "modalNewContent--show"

                        if (!button.classList.contains(classButton)) {
                            // Button switcher
                            const activeButton = document.querySelector('.' + classButton)
                            activeButton.classList.remove(classButton)
                            button.classList.add(classButton)

                            // Content switcher
                            const contentActive = document.querySelector('.' + classContent)
                            contentActive.classList.remove(classContent)
                            const findContent = document.querySelector('.' + event)
                            findContent.classList.add(classButton)
                        }
                    })
                })
            }, 100))
        }
    })
}
run_helpdesk()
  


const kokotarium = () => {
    const buttons = document.querySelectorAll('.modalSwitcher__button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const event = button.getAttribute('data-event')
            const classButton = "modalSwitcher__button--active"
            const classContent = "modalNewContent--show"
            console.log(button)

            console.log(!button.classList.contains(classButton))

            if (!button.classList.contains(classButton)) {
                console.log("ahoj")
                // Button switcher
                const activeButton = document.querySelector('.' + classButton)
                console.log(activeButton)
                activeButton.classList.remove(classButton)
                button.classList.add(classButton)
                console.log("click 2")

                // Content switcher
                const contentActive = document.querySelector('.' + classContent)
                contentActive.classList.remove(classContent)
                const findContent = document.querySelector('.' + event)
                findContent.classList.add(classButton)
                console.log("click 3")
            }
        })
    })
}
kokotarium()

const ahoj = () => {
    const buttons = document.querySelectorAll('.modalSwitcher__button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonClasses = button.getAttribute('class')
            console.log(buttonClasses)
            const event = button.getAttribute('data-event')
            const classButton = "modalSwitcher__button--active"
            const classContent = "modalNewContent--show"

            if (!buttonClasses.includes(classButton)) {
                console.log("Neobsahuje")
            } else {
                console.log("Obsahuje")
            }
        })
    })
}
ahoj()
    