const initialState = {
  items: [],
};

const item = (state, action) => {
  switch (action.type) {
    case 'RECEIVED_MENU_ITEM':
      return {
        item: action.item,
      };
    default:
      return state;
  }
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVED_MENU_ITEM':
      return [
        ...state,
        item(undefined, action),
      ];
    default:
      return state;
  }
};

export default menu;
