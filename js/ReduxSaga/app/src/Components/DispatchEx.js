import React from 'react';
import {connect} from 'react-redux';

const DispatchEx = (props) => (
    <div>
        DispatchEx: <br />
        <button onClick = {props.dispatchInit}>dispatchInit</button>
        <button onClick = {props.dispatchA}> A</button>
        <button onClick = {props.dispatchB}> B</button>
    </div>
);


const mapDispatchToProps = dispatch => ({
    dispatchInit: () => dispatch({ type: 'ACTION_PAGE_A_INIT' }),
    dispatchA: () => dispatch({ type: 'ACTION_PAGE_A_1' }),
    dispatchB: () => dispatch({ type: 'ACTION_PAGE_A_2' }),


});


export default connect(null, mapDispatchToProps)(DispatchEx);