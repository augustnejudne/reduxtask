import popupReducer from "./popupReducer";
import allUsersReducer from "./allUsersReducer";
import activeUserReducer from "./activeUserReducer.js";
import deleteUserReducer from "./deleteUserReducer.js";
import addUserReducer from "./addUserReducer.js";
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    popup: popupReducer,
    user: allUsersReducer,
    activeUser: activeUserReducer,
    delete: deleteUserReducer,
    adduser: addUserReducer,
    form: formReducer
})

export default rootReducer;
