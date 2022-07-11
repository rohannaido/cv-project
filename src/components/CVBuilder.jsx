import React, { Component } from "react";
import '../styles/CVBuilder.css'
import WordExperienceInput from "./WorkExperienceInput";

class CVBuilder extends Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.props.updateBasicDetails = this.props.updateBasicDetails.bind(this);
    }

    handleInputChange(e) {
        this.props.updateBasicDetails(e.target.name, e.target.value);
    }

    render(){

        // const { basicDetail, updateBasicDetails } = this.props;

        return(
            <div className="cv-inputs-div">
                <h1>Enter Your Details</h1>
                <form className="cv-inputs-form">
                    <h2 className="cv-builder-section-heading">Personal Details</h2>
                    <input type="text" name="name" placeholder="Name" onChange={this.handleInputChange} value={this.props.basicDetails.name}/>
                    <input type="text" name="title" placeholder="Title" onChange={this.handleInputChange} value={this.props.basicDetails.title}/>
                    <input type="text" name="phonenumber" placeholder="Phone Number" onChange={this.handleInputChange} value={this.props.basicDetails.phonenumber}/>
                    <input type="email" name="email" placeholder="Email" onChange={this.handleInputChange} value={this.props.basicDetails.email}/>
                    <input type="text" name="address" placeholder="Address" onChange={this.handleInputChange} value={this.props.basicDetails.address}/>
                    <textarea name="description" id="" rows="5" placeholder="Description" onChange={this.handleInputChange} value={this.props.basicDetails.description}></textarea>

                    <h2 className="cv-builder-section-heading">Work Experience</h2>
                    {this.props.workexperienceArr.map((workex, index) => <WordExperienceInput data={workex} index={index} updateWorkExperience={this.props.updateWorkExperience} deleteWorkExperience={this.props.deleteWorkExperience}/> )}
                    <button className="add-workex-btn" type="button" onClick={this.props.addNewWorkExperience}>Add</button>

                    <h2 className="cv-builder-section-heading">Education</h2>
                    {/* {this.props.educationArr.map((workex, index) => <EducationInput data={workex} index={index} updateWorkExperience={this.props.updateWorkExperience} deleteWorkExperience={this.props.deleteWorkExperience}/> )}
                    <button className="add-workex-btn" type="button" onClick={this.props.addNewWorkExperience}>Add</button> */}

                </form>
            </div>
        )
    }
}

export default CVBuilder;