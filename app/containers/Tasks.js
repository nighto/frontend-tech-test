import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ItemsList from '../components/ItemsList';

const Tasks = ({ tasks }) => {
    return (
        <div>
            <ItemsList tasks={tasks} />
        </div>
    );
};

Tasks.propTypes = {
    tasks: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        tasks: state.appReducer.tasks,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {...dispatch};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);
