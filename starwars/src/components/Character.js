import React from 'react';
import './StarWars.css';


class Character extends React.Component {

    render() {
        console.log(this.props.char.name);
    return (
            <ul>
                <li><strong>Name: </strong> {this.props.char.name}</li>
                <li><strong>Birth Year: </strong> {this.props.char.birth_year}</li>
                <li><strong>Gender: </strong> {this.props.char.gender}</li>
                <li><strong>Skin Color: </strong> {this.props.char.skin_color}</li>
            </ul>
            );    
    }
}

export default Character;