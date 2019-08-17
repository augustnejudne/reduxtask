import * as actionType from "./actions";

export const onToggleModal = (show) => ({
    type: actionType.TOGGLE_MODAL,
    show
});

export const selectUser = (user) => ({
    type: actionType.SELECT_USER,
    user
});

export const deleteUser = (user) => ({
    type: actionType.DELETE_USER,
    user
});

export const addUser = (user) => ({
    type: actionType.ADD_USER,
    user
});