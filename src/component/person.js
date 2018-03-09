import React, { Component } from 'react';
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"DOG" }
    }
    render() { 
        return (<h1>welcome ! {this.props.name}</h1> )
    }
}
 
export default Person;