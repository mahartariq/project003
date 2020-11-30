import React,{useState} from 'react';
import './index.css'

function Room(){
    let [isLit,setLit] = useState(true);
    let [temp,settemp] = useState(22);
    return(
        <div className={`room ${isLit?"lit":"dark"}`}>
            the room is {isLit ? "lit" : "dark"}
            temperature {temp}
            <br/><br/>
        <button onClick={()=>setLit(true)}>ON</button>  
        <button onClick={()=>setLit(false)}>OFF</button> 
        <br/><br/> 
        <button onClick={()=>settemp(temp => temp+1)}>Increase Temperature</button>
        <button onClick={()=>settemp(temp--)}>Increase Temperature</button>
            </div>
    )
}

export default Room;