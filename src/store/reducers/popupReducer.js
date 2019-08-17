import * as actionType from '../actions/actions';

const initState = {
    show: false
}

const popupReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.TOGGLE_MODAL: {
            return {
                ...state,
                show: action.show
            }
        }
        default:
            return state;
    }
}

export default popupReducer;