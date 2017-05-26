import firebase from 'src/redux/firebase';

export const recievedMenuItem = item => ({
  type: 'RECEIVED_MENU_ITEM',
  item,
});

export const fetchMenu = () => {
  return function (dispatch) {
    firebase.database()
      .ref('menu')
      .on('child_added', snapshot => {
        const item = snapshot.val() || [];
        dispatch(recievedMenuItem(item));
      });
  };
};
