
// Actions
const CHECK_STATUS  = 'book-store/categories/CHECK_STATUS';

// Reducer
export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS: 
    return 'UNDER CONSTRUCTION ...';
    default: return state;
  }
}

// Action Creators
export function checkStatus() {
  return { type: CHECK_STATUS };
}
