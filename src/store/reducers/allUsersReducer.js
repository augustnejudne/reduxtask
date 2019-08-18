import * as actionType from '../actions/actions';

const initState = {
    users: [
        {
            "id": 1,
            "name": "Andrew Amernante",
            "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage"
        },
        {
            "id": 2,
            "name": "Frank Wang",
            "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of an elizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp."
        },
        {
            "id": 3,
            "name": "Sissi Chen",
            "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of — and solution to — all life's problems."
        },
        {
            "id": 4,
            "name": "Diego Garcia",
            "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction. You don't win friends with salad."
        },
        {
            "id": 5,
            "name": "Fuad Rashid",
            "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        }
    ],
}

const allUsersReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_USER: {
            return {
                ...state,
                users: [...state.users, action.user]
            }
        }
        case actionType.DELETE_USER: {
            return {
                ...state,
                users: state,
                users: state.users.filter(user => user !== action.user)
            }
        }
        default:
            return state;
    }
}

export default allUsersReducer;