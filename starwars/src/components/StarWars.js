import React from 'react';


class StarWars extends React.Component {
    
    render(props) {
        
        console.log(props.getCharacters());
        
        return (
            <div>Testing StarWars</div>
        );
        
    }
}

export default StarWars;