import React from 'react';
import StarWarsJSON from './StarWarsJSON.json';


class StarWars extends React.Component {
    
    render() {
        
        return (
            <ol>
            {StarWarsJSON[0].name}
            {StarWarsJSON.map( character => {
            return <li>{character.name}</li>
            })}
            
            
            </ol>
            
        );
    }
}

export default StarWars;