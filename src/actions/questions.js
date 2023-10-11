import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { updateUserAnswer, updateUserQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion(firstOption, secondOption, authedUser.id)
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(updateUserQuestion(question));
            });
    };
}

function addQuestionAnswer(authedUser, questionId, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        questionId, 
        answer
    };
}

export function handleAddQuestionAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestionAnswer(authedUser.id, questionId, answer)
            .then(() => {
                dispatch(addQuestionAnswer(authedUser.id, questionId, answer));
                dispatch(updateUserAnswer(authedUser.id, questionId, answer));
            });
    };
}