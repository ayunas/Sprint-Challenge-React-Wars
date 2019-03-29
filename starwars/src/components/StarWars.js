import React from 'react';
import StarWarsJSON from './StarWarsJSON.json';


class StarWars extends React.Component {
    
    render() {
        
        return (
            <div>{StarWarsJSON[0].name}</div>
        );
    }
}

export default StarWars;