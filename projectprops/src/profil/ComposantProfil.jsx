import React from "react";
import './ComposantProfil.css';

function Composantprofil({fullname,profession,bio,logo,handlename}) {
    return(
        <div className="bok">
            <header className="head">
                <div className="headImg">
                    <img src={logo} alt=""/>
                </div>
                <div className="headText">
                    <p>Fullname:{fullname}</p>
                    <p>Profession:{profession}</p>
                </div>
            </header>
            <footer className="foot">
                <p>Bio:{bio}</p>
                <button onClick={handlename}>handlename</button>
            </footer>
        </div>
    )
}

export default Composantprofil;