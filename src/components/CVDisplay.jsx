import React, { Component } from "react";
import '../styles/cvdisplay.css'


class CVDisplay extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="cv-display-div">
                <h1 className="heading">Your CV</h1>
                <div className="cv-content-div">
                    <div className="cv-header">
                        <h1>Name and Lastname</h1>
                        <div className="personal-details-div">
                            <span>Phone Number</span>
                            <span>Email@gmail</span>
                            <span>ADDRESS</span>
                        </div>
                    </div>
                    <div className="header-content-border">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default CVDisplay;