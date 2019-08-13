import uuid from 'uuid/v1';

export default (state, action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        id: uuid()
      }]
      break;
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.book.id);
      break;
    default:
      return state;
  }
}