import popupReducer from "./popupReducer";
import allUsersReducer from "./allUsersReducer";
import activeUserReducer from "./activeUserReducer.js";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    popup: popupReducer,
    user: allUsersReducer,
    activeUser: activeUserReducer
})

export default rootReducer;
