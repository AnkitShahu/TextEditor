import React, {useState} from 'react';

function TextForm(props) {

    const convertupcase = () => {
        console.log("upperclick")
        let mytext = text.toUpperCase();
        setText(mytext);
        props.showalter("To Upper Case", "primary")
    }

    function convertlocase() {
        console.log("Lowerclick");
        let mytext = text.toLowerCase();
        setText(mytext);
        props.showalter("To Lower  Case", "primary")
    }

    const convertclear = () => {
        console.log("convertclear")
        setText('')
        props.showalter("Text Clear", "primary")
    }

    const convertfirst = () => {
        // let mytext = text.charAt(0).toUpperCase();
        let mytext = text[0].toUpperCase() + text.substring(1);
        setText(mytext)
        props.showalter("Convert first", "primary")
    }

    const handelCopy = () => {
        console.log("copy")
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select()
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showalter("Copy Text", "primary")
    }

    const handelExtra = () =>{
        let newtext = text.split(/[  ]+/)
        setText(newtext.join(" "))
        props.showalter("Remove Empty Spaces", "primary")
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
                    <textarea className="form-control" id="exampleFormControlTextarea1" cols="180" rows="15" value={text} onChange={handelonchange}></textarea>
                    <button disabled={text.length === 0} className="btn btn-secondary mt-3 mx-2" onClick={convertupcase} > Convert UpperCase</button>
                    <button  disabled={text.length === 0}  className="btn btn-secondary mt-3 mx-2" onClick={convertlocase} > Convert LowerCase</button>
                    <button  disabled={text.length === 0} className="btn btn-secondary mt-3 mx-2" onClick={convertclear} > Clear Text</button>
                    <button  disabled={text.length === 0} className="btn btn-secondary mt-3 mx-2" onClick={convertfirst} > First Text Capital</button>
                    <button  disabled={text.length === 0} className="btn btn-secondary mt-3 mx-2" onClick={handelCopy} > Copy</button>
                    <button  disabled={text.length === 0} className="btn btn-secondary mt-3 mx-2" onClick={handelExtra} > Extra Space Remove</button>
                </div>
                <div className='mt-3'>
                    <h1> Word Count</h1>
                    <p> Number of Word {text.split(" ").filter((element)=>{return element.length != 0}).length}, and Number Of Charecter is {text.length}</p>
                    <p> Minute To Read {0.008 * text.split(" ").length}</p>
                    <h3> PreView</h3>
                    <p>{text.length > 0 ? text : "Nothing to preview"}</p>
                </div>
            </div>
        </>
    );
}

export default TextForm;    