// This would be each individual cards
import React, {useState, useEffect} from 'react'
import "./myStyles.css"

function Cards(props) {

    
    let [src, setSrc] = useState(props.src);
    let [name, setName] = useState(props.name);

    return (
        <div onClick={props.onClick}>
             {/* onClick = {() => props.handler(name)}  */}
            <div className = "cardFrame"> 
                <img src = {src} alt = {name}/>
                <div id = "imageName"> {name} </div>
            </div>

        </div>
    )
}

export default Cards
