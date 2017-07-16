import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { doShowNewTask, doHideNewTask } from '../actions';
import ItemNew from '../components/ItemNew';
import ItemsList from '../components/ItemsList';
import { tasksStyles } from '../styles/tasks.scss';

const Tasks = ({ tasks, showNewTask, onShowNewTask, onHideNewTask }) => {
    return (
        <div className={tasksStyles}>
            {showNewTask ?
                <ItemNew onHideNewTask={onHideNewTask} />
            :
                <ItemsList tasks={tasks} onShowNewTask={onShowNewTask} />
            }
        </div>
    );
};

Tasks.propTypes = {
    tasks: PropTypes.array,
    showNewTask: PropTypes.bool,
    onShowNewTask: PropTypes.func,
    onHideNewTask: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        tasks: state.appReducer.tasks,
        showNewTask: state.appReducer.showNewTask,
        onShowNewTask: PropTypes.func,
        onHideNewTask: PropTypes.func,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShowNewTask: () => dispatch(doShowNewTask()),
        onHideNewTask: () => dispatch(doHideNewTask()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);
