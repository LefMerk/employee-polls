import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA.js";

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function saveQuestion(info) {
    return _saveQuestion(info);
}

export function saveQuestionAnswer(authedUserId, questionId, answer) {
    return _saveQuestionAnswer({
        authedUser: authedUserId,
        qid: questionId,
        answer
    });
}