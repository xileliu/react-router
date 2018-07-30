import React from 'react';
import {Consumer} from './context'

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Consumer>
                {
                    value => {
                        let {history:{push} } = value;
                        return <a onClick={()=>push(this.props.to)}>{this.props.children}</a>
                    }
                }
            </Consumer>
        );
    }
}

export default Link;

