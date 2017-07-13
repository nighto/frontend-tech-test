import PropTypes from 'prop-types';
import React from 'react';

const Item = ({task}) => {
    return (
        <li>
            <strong>{task.title}</strong><br />
            {task.description}
        </li>
    );
};

Item.propTypes = {
    task: PropTypes.object
};

export default Item;
