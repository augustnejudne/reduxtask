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

export const nameChange = (e) => ({
    type: actionType.NAME_CHANGE,
    text: e.target.value,
});

export const idChange = (e) => ({
    type: actionType.ID_CHANGE,
    number: e.target.value,
});

export const descChange = (e) => ({
    type: actionType.DESC_CHANGE,
    desc: e.target.value
});