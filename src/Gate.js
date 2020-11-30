import React from 'react';

function Gate({isOpen}){
    return(
    <h2>{isOpen?"Open":"Closed"}</h2>
    )
}

export default Gate;