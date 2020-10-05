import React from 'react';
import {connect} from 'react-redux';
import {removeName} from '../redux/actions';

// const tempNames = ['Sunny', 'Vette'];

function Listing (props) {
    const listElements = props.ideas.map((name, index) => {
        return (<li key={index}>{name}</li>)
    });

    return (
        <ul>{listElements}</ul>
    );
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