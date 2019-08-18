import * as actionType from '../actions/actions';

const activeUserReducer = (state = {}, action) => {
    switch (action.type) {
        case actionType.SELECT_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state;
    }
}

export default activeUserReducer;