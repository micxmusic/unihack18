// reducers

const initialState = [];

export default function recipes(state = initialState, action) {
    switch (action.type) {
        case "FETCH_RECIPES":
            return action.recipes;
        default:
            return state;
    }
}
