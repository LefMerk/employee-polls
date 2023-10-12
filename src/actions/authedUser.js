export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";
export const NOT_AUTHED_USER = "NOT_AUTHED_USER";

export function setAuthedUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        authedUser,
    }
}

export function notAuthedUser(error) {
    return {
        type: NOT_AUTHED_USER,
        error
    }
}

export function logoutAuthedUser() {
    return {
        type: LOGOUT_AUTHED_USER,
    }
}

export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const {users} = getState();
        //console.log(users);
        const user = Object.values(users).find((user) => user.id === username && user.password === password);
        //console.log(user);
        if (user) {
            return dispatch(setAuthedUser(user))
        }
        else {
            dispatch(notAuthedUser('Not authorised'));
        }
    };
}

export function handleLogout() {
    return (dispatch) => {
        return dispatch(logoutAuthedUser());
    };
}