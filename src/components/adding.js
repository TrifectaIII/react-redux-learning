import React from 'react';
import {connect} from 'react-redux';
import {addName} from '../redux/actions';

class Adding extends React.Component {

    handleKeypress = (event) => {
        if (event.key === 'Enter') {
            this.props.addName('Testing');
        }
    }

    render = () => (
        <div>
            <label htmlFor='nameinput'>Enter Name:</label>
            <input id='nameinput' type='text' onKeyPress={this.handleKeypress}></input>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = {
    addName,
}

export default connect(mapStateToProps, mapDispatchToProps)(Adding);