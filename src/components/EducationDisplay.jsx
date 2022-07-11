import React, { Component } from "react";
import '../styles/EducationDisplay.css';

class EducationDisplay extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const details = this.props.data;
        const index = this.props.index;

        return(
            <div className="education-div" key={index}>
                <div className="education-heading-div">
                    <h3>{details.coursename}</h3>
                    <p className="university-details">{details.university} | <span>{details.startdate} - {details.enddate}</span></p>
                </div>
                <p className="education-description">{details.description}</p>
            </div>
        )
    }
}

export default EducationDisplay;