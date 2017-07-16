import PropTypes from 'prop-types';
import React from 'react';

const ItemNew = ({onHideNewTask}) => {
    return (
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
    );
};

ItemNew.propTypes = {
    onHideNewTask: PropTypes.func,
};

export default ItemNew;
