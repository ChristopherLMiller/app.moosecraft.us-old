export function addMenuItem(item) {
  return {
    type: 'ADD_MENU_ITEM',
    item,
  };
}

export function addServerRuleCategory(item) {
  return {
    type: 'ADD_SERVER_RULE_CATEGORY',
    item,
  };
}
