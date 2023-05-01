import React, { useState } from 'react';



function TextForm(props) {

    const convertupcase = () => {
        console.log("upperclick")
        let mytext = text.toUpperCase();
        setText(mytext);
        props.showalter("To Upper Case")
    }

    function convertlocase() {
        console.log("Lowerclick");
        let mytext = text.toLowerCase();
        setText(mytext);
    }

    const convertclear = () => {
        console.log("convertclear")
        setText('')
    }

    const convertfirst = () => {
        console.log("convertfirst")
        // let mytext = text.charAt(0).toUpperCase();
        let mytext = text[0].toUpperCase() + text.substring(1);
        setText(mytext)
    }

    const handelCopy = () => {
        console.log("copy")
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select()
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
    }

    const handelExtra = () =>{
        let newtext = text.split(/[  ]+/)
        setText(newtext.join(" "))
    }

    const handelonchange = () => {
        console.log("On change handel")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h1 >{props.header}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="12" value={text} onChange={handelonchange}></textarea>
                    <button className="btn btn-secondary mt-3 mx-2" onClick={convertupcase} > Convert UpperCase</button>
                    <button className="btn btn-secondary mt-3 mx-2" onClick={convertlocase} > Convert LowerCase</button>
                    <button className="btn btn-secondary mt-3 mx-2" onClick={convertclear} > Clear Text</button>
                    <button className="btn btn-secondary mt-3 mx-2" onClick={convertfirst} > First Text Capital</button>
                    <button className="btn btn-secondary mt-3 mx-2" onClick={handelCopy} > Copy</button>
                    <button className="btn btn-secondary mt-3 mx-2" onClick={handelExtra} > Extra Space Remove</button>
                </div>
                <div className='mt-3'>
                    <h1> Word Count</h1>
                    <p> Number of Word {text.split(" ").length}, and Number Of Charecter is {text.length}</p>
                    <p> Minute To Read {0.008 * text.split(" ").length}</p>
                    <h3> PreView</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}

export default TextForm;    