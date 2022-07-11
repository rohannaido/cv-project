import React, { Component } from "react";
import '../styles/cvdisplay.css'


class CVDisplay extends Component {
    constructor(props){
        super(props);
    }

    render(){

        const {name, title, phonenumber, email, address, description} = this.props.basicDetails;

        return(
            <div className="cv-display-div">
                <h1 className="heading">Your CV</h1>
                <div className="cv-content-div">
                    <div className="cv-header">
                        <div className="name-title-div">
                            <h1>{name}</h1>
                            <p className="title">{title}</p>
                        </div>
                        <div className="personal-details-div">
                            <span>{phonenumber}</span>
                            <span>{email}</span>
                            <span>{address}</span>
                        </div>
                    </div>
                    <div className="header-content-border">
                    </div>
                    <div className="description-text-div">
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}

export default CVDisplay;