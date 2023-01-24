window.onload = () => {
    const run_helpdesk = () => {
        const helpdesk_stack = document.querySelectorAll('#landingpage .js-lp-showSendHelpdeskQuestionDialog')
        helpdesk_stack.forEach(element => {
            element.onclick = (event) => {
                event.preventDefault()
                const question_id = element.getAttribute('data-question-id')
                new Promise((resolve) => {
                    HelpDeskQuestion.showSendHelpdeskQuestionDialog({
                        questionGroupId: 34,
                        questionId: question_id,
                        showGroupQuestions: true,
                        forceQuestionNameAsTitle: false
                    });
                    resolve()
                }).then(() => setTimeout(() => {
                    // remove items from the form
                    const items_stack = ['heldeskQuestion-399', 'heldeskQuestion-192', 'heldeskQuestion-190', 'heldeskQuestion-191', 'heldeskQuestion-193', 'heldeskQuestion-194']
                    
                    items_stack.forEach((item) => {
                        if (question_id == 192 && item == 'heldeskQuestion-192') {
                            return
                        } else if (question_id == 191 && item == 'heldeskQuestion-190' || question_id == 191 && item == 'heldeskQuestion-191') {
                            return
                        } else {
                            document.getElementById(item).remove()
                        }
                    })
                }, 100))
            }
        })
    }
    
    window.location.href.indexOf('mbeta.alza.cz') != -1 || window.location.href.indexOf('m.alza.cz') != -1 ? 0 : run_helpdesk()
}