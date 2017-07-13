import PropTypes from 'prop-types';
import React from 'react';

const Item = ({data}) =>
    <li>{data}</li>;

Item.propTypes = {
    data: PropTypes.object
};

export default Item;
