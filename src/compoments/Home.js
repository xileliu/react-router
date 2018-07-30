import React from 'react';
//import PropTypes from 'prop-types';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props);
        return (
            <div>Home</div>
        );
    }
}



export default Home;
