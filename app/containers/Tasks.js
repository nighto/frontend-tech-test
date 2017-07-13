import React from 'react';
import { connect } from 'react-redux';
import ItemsList from '../components/ItemsList';

const Tasks = () => {
    return (
        <div>
            <ItemsList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {...state};
};

const mapDispatchToProps = (dispatch) => {
    return {...dispatch};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);
