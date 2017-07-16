import PropTypes from 'prop-types';
import React from 'react';
import Item from './Item';

const ItemsList = ({tasks, onShowNewTask}) => {
    return (
        <div>
            <div className="pull-right">
                <button className="btn btn-success" onClick={onShowNewTask}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    Add task
                </button>
            </div>
            { !tasks || tasks.length === 0 ?
                <p>No tasks recorded.</p>
            :
                <ul>
                    {tasks.map((task, index) => {
                        return (
                            <Item key={index} task={task} />
                        );
                    })}
                </ul>
            }
        </div>
    );
};

ItemsList.propTypes = {
    tasks: PropTypes.array,
    onShowNewTask: PropTypes.func,
};

export default ItemsList;
