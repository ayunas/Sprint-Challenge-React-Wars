import React from 'react';
import './StarWars.css';


class Character extends React.Component {

    render() {
        console.log(this.props.char.name);
    return (
        <ul>
            <li>{this.props.char.name} - {this.props.char.birth_year}</li>
        </ul>
    ) 

    }
}

export default Character;