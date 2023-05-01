import React from 'react'
import biga from '../src/assets/big.png'

function AboutDarkMode(props) {
    return (
        <>
        <div>
            <div className="container text-center border border-danger">
                <div className="row">
                    <div className="card" style="width: 18rem;">
                        <img src= {biga} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default AboutDarkMode;