import React,{useState} from 'react';

function Room(){

    const [isLit, setLit] = useState(true);
    function update(){
        setLit(!isLit)
    }

    return(
            <div>
    <h2>This Room is = {isLit ? "dark" : "lit"}</h2>
    <button onClick={update}>Toggle Light</button>
    
            </div>
    )
}

export default Room;