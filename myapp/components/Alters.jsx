import React from 'react'

function Alters(props) {
    return (
        <>
           props.alert && <div className="alert alert-primary" role="alert">
                <strong>hrllo</strong>{props.alter.msg}
            </div>
        </>
    );
}

export default Alters;