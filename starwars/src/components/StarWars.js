import React from 'react';
import './StarWars.css';
import StarWarsJSON from './StarWarsJSON.json';
import Character from './Character.js'


class StarWars extends React.Component {
    
    render() {
        
        return (
            <ol>
            {StarWarsJSON.map( character => {
            return (
                <Character char={character}/>
           );
            })}
            </ol>
        );
    }
}

export default StarWars;