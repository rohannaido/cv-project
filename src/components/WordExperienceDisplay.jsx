import React, { Component } from "react";
import '../styles/WorkExperienceDisplay.css';

class WordExperienceDisplay extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const details = this.props.data;
        const index = this.props.index;

        return(
            <div className="workexperience-div" key={index}>
                <div className="workexperience-heading-div">
                    <h3>{details.position}</h3>
                    <p className="workex-company-details">{details.companyname} | <span>{details.startdate} - {details.enddate}</span></p>
                </div>
                <p className="workexperience-description">{details.description}</p>
            </div>
        )
    }
}

export default WordExperienceDisplay;