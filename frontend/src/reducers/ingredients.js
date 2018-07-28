//reducers
const initialState = [];

export default function ingredients(state = initialState, action) {
  switch (action.type) {
    case "FETCH_INGREDIENTS":
      return action.names;
    default:
      return state;
  }
}
