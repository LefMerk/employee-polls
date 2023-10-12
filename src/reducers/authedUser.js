import { SET_AUTHED_USER, LOGOUT_AUTHED_USER, NOT_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.authedUser;
        case LOGOUT_AUTHED_USER:
            return null;
        case NOT_AUTHED_USER:
            return action.error;
        default:
            return state;
    }
}