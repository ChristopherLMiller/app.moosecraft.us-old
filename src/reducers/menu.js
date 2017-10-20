export default function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_MENU_ITEM':
      if (action.item) {
        return [...state, action.item];
      }
  }
  return state;
}
