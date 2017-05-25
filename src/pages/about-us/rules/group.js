import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ data }) => {
  /*console.log(data);
  const rules = data.map(item => (
    <li>{item.name}</li>
  ));

  console.log(rules);*/

  return (
    <ul>
      Test
    </ul>
  );
};

Group.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Group;
