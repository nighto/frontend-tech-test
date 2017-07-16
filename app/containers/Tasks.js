import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { doShowNewTask, doHideNewTask } from '../actions';
import ItemsList from '../components/ItemsList';
import { tasksStyles } from '../styles/tasks.scss';

const Tasks = ({ tasks, showNewTask, onShowNewTask, onHideNewTask }) => {
    return (
        <div className={tasksStyles}>
            {showNewTask ?
                <div>
                    <h3>New Task</h3>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="newTitle" className="col-sm-2 control-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="newTitle"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="newDescription" className="col-sm-2 control-label">Description</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="newDescription"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-danger" onClick={onHideNewTask}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            :
                <div>
                    <div className="pull-right">
                        <button className="btn btn-success" onClick={onShowNewTask}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            Add task
                        </button>
                    </div>
                    <ItemsList tasks={tasks} />
                </div>
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
