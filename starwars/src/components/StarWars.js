import React from 'react';
import './StarWars.css';
import StarWarsJSON from './StarWarsJSON.json';


class StarWars extends React.Component {
    
    render() {
        
        return (
            <ol>
            {StarWarsJSON.map( character => {
            return <li>{character.name}</li>
            })}
            
            
            </ol>
            
        );
    }
}

export default StarWars;