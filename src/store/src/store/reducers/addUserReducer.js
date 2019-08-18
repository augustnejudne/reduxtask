import * as actionType from '../actions/actions';

const initState = {
    name: null,
    id: null,
    Description: null
}

const addUserReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state;
    }
}

export default addUserReducer;

