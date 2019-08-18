import * as actionType from '../actions/actions';

const deleteUserReducer = (state = {}, action) => {
    switch (action.type) {
        case actionType.DELETE_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state;
    }
}

export default deleteUserReducer;