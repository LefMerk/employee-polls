export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_ANSWER = "UPDATE_USER_ANSWER";
export const UPDATE_USER_QUESTION = "UPDATE_USER_QUESTION";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function updateUserAnswer(authedUser, questionId, answer) {
    return {
        type: UPDATE_USER_ANSWER,
        authedUser,
        questionId,
        answer
    };
}

export function updateUserQuestion({ author, id }) {
    return {
        type: UPDATE_USER_QUESTION,
        author,
        questionId: id,
    };
}