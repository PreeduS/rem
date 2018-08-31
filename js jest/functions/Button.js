import React from 'react';


class Button extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        this.update = this.update.bind(this);
    }
    update(mode){
        let counter = this.state.counter;
        if(mode === 'inc'){
            counter++;
        }else{ counter--; }
        this.setState({counter});

        this.props.onClick(mode);
    }

    render(){
        return(
            <div>
                <button onClick = {() => this.update(this.props.mode) }>Click</button>
            </div>
        );
    }
}

export default Button;