import React from 'react';

function MediaCard({title,body,imageUrl}){
    return(
        <div>
            <h2>{title}</h2>
    <p>{body}</p>
            <img src={imageUrl}></img>
        </div>
    )
}

export default MediaCard;