import React from 'react'

function Alters(props) {
    console.log("data", props.alter)
    const Capitalie = (word) =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
            props.alter && <div className={`alert alert-${props.alter.type} fade show mx-2`} role="alert">
                <strong>{Capitalie(props.alter.type)}</strong>{props.alter.msg}
            </div>
       
    );
}

export default Alters;