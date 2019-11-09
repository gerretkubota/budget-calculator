import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ itemInfo }) => (
  <>
    <li>
      <div>
        <p>{itemInfo.expense}</p>
        <p>{itemInfo.amount}</p>
      </div>
      <div>
        <button type="button">EDIT</button>
        <button type="button">DELETE</button>
      </div>
    </li>
  </>
);

Item.propTypes = {
  itemInfo: PropTypes.shape({}),
};

export default Item;
