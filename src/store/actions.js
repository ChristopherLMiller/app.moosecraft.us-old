export function addMenuItem(item) {
  return {
    type: 'ADD_MENU_ITEM',
    item,
  };
}

export function addServerRule(item) {
  return {
    type: 'ADD_SERVER_RULE',
    item,
  };
}
