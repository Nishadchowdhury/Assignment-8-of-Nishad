import React from 'react';

const RandomSuggest = (props) => {

    if(!props){
        alert('plese add some in cart');
        window.location.reload(true);
        return;
    }

    const {name} = props.data
    
    return (
        <div>
            {name}
        </div>
    );
};

export default RandomSuggest;


