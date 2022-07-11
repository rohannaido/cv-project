import React, { Component } from "react";
import '../styles/CVDisplay.css'
import EducationDisplay from "./EducationDisplay";
import WorkExperienceDisplay from "./WorkExperienceDisplay";


class CVDisplay extends Component {
    constructor(props){
        super(props);
    }

    render(){

        const {name, title, phonenumber, email, address, description} = this.props.basicDetails;
        const workexperienceArr= this.props.workexperienceArr;
        const educationArr = this.props.educationArr;

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
                    <div className="work-experience-section-div">
                        <h2>Work Experience</h2>
                        {workexperienceArr.map((workex, index) => <WorkExperienceDisplay data={workex} index={index} /> )}
                    </div>
                    <div className="educatoin-section-div">
                        <h2>Education</h2>
                        {educationArr.map((edu, index) => <EducationDisplay data={edu} index={index} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CVDisplay;