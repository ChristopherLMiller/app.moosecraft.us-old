export default function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_SERVER_RULE':
      return [...state, action.item];
  }
  return state;
}
