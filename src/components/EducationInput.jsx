import React, { Component } from "react";
import '../styles/EducationInput.css';

class EducationInput extends Component{
    constructor(props){
        super(props);
        this.updateDetails = this.updateDetails.bind(this);
    }

    updateDetails(e, index){
        console.log(e.target.name + " ::::  " + e.target.value)
        this.props.updateEducation(index, e.target.name, e.target.value);
    }

    render(){
        const details = this.props.data;
        const index = this.props.index;

        return(
            <div className="education-input-div" key={index}>
                <input type="text" name="coursename" placeholder="Course Name" value={details.coursename} onChange={(e) => this.updateDetails(e, index)} />
                <input type="text" name="university" placeholder="University" value={details.university} onChange={(e) => this.updateDetails(e, index)} />
                <input type="text" name="startdate" placeholder="Start Date" value={details.startdate} onChange={(e) => this.updateDetails(e, index)} />
                <input type="text" name="enddate" placeholder="End Date" value={details.enddate} onChange={(e) => this.updateDetails(e, index)} />
                <input type="text" name="description" placeholder="Description" value={details.description} onChange={(e) => this.updateDetails(e, index)} />
                <button className="delete-btn" type="button" onClick={() => this.props.deleteEducation(index)}>Delete</button>
            </div>
        )
    }
}

export default EducationInput;