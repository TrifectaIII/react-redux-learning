import React from 'react';
import {connect} from 'react-redux';
import {addName} from '../redux/actions';

class Adding extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };
    }

    handleKeypress = (event) => {
        if (event.key === 'Enter') {
            this.props.addName(this.state.value);
            this.setState({value:''});
        }
    }

    handleChange = (event) => {
        this.setState({value:event.target.value});
    }

    render = () => (
        <div>
            <label htmlFor='nameinput'>Enter Name:</label>
            <input 
                id='nameinput' 
                type='text' 
                value={this.state.value} 
                onChange={this.handleChange} 
                onKeyPress={this.handleKeypress}
            ></input>
        </div>
    );
}

const mapStateToProps = null;

const mapDispatchToProps = {
    addName,
}

export default connect(mapStateToProps, mapDispatchToProps)(Adding);