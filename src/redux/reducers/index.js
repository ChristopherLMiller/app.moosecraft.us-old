import { combineReducers } from 'redux';

import menu from './menu';
import user from './user';

const appReducer = combineReducers({
  menu,
  user,
});

export default appReducer;
