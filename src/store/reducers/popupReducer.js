import * as actionType from '../actions/actions';

const initState = {
    show: false,
    nameValue: ' ',
    idValue: ' ',
    descriptionValue: ' '
}

const popupReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.TOGGLE_MODAL: {
            return {
                ...state,
                show: action.show
            }
        }
        case actionType.NAME_CHANGE: {
            return {
                ...state,
                nameValue: action.text,
            }
        }
        case actionType.ID_CHANGE: {
            return {
                ...state,
                 idValue: action.number,
            }
        }
        case actionType.DESC_CHANGE: {
            return {
                ...state,
                descriptionValue: action.desc
            }
        }
        default:
            return state;
    }
}

export default popupReducer;