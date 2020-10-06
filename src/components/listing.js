import React from 'react';
import {connect} from 'react-redux';
import {removeName} from '../redux/actions';

// const tempNames = ['Sunny', 'Vette'];

class Listing extends React.Component{
    render() {
        const listElements = this.props.ideas.map((name, index) => {
            return (
                <li key={index}>
                    <button onClick={()=>{this.props.removeName(index)}}>
                        {name}
                    </button>
                </li>
            )
        });

        return (
            <ul>{listElements}</ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ideas: state.ideas,
    }
}

const mapDispatchToProps = {
   removeName,
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing);