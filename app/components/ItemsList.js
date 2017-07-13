import PropTypes from 'prop-types';
import React from 'react';
import Item from './Item';

const ItemsList = ({tasks}) => {
    if (!tasks || tasks.length === 0) {
        return <p>No tasks recorded.</p>;
    }
    return (
        <ul>
            {tasks.map((task, index) => {
                return (
                    <Item key={index} task={task} />
                );
            })}
        </ul>
    );
};

ItemsList.propTypes = {
    tasks: PropTypes.array
};

export default ItemsList;
