import React from 'react';
import {connect} from 'react-redux';

const DispatchByOrder = (props) => (
    <div>
        Dispatch by order: <br />
        <button onClick = {props.dispatchA}> dispatch A</button>
        <button onClick = {props.dispatchB}> dispatch B</button>
        <button onClick = {props.dispatchC}> dispatch C</button>
    </div>
);


const mapDispatchToProps = dispatch => ({
    dispatchA: () => dispatch({ type: 'ACTION_BY_ORDER_A' }),
    dispatchB: () => dispatch({ type: 'ACTION_BY_ORDER_B' }),
    dispatchC: () => dispatch({ type: 'ACTION_BY_ORDER_C' }),

});


export default connect(null, mapDispatchToProps)(DispatchByOrder);