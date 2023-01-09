const helpdesk_stack = document.querySelectorAll('#landingpage .js-lp-showSendHelpdeskQuestionDialog')
helpdesk_stack.forEach(element => {
    element.onclick = (event) => {
        event.preventDefault()
        const question_id = element.getAttribute('data-question-id')
        HelpDeskQuestion.showSendHelpdeskQuestionDialog({
            questionGroupId: 34,
            questionId: question_id,
            showGroupQuestions: !0,
            forceQuestionNameAsTitle: !1
        })
    }
})