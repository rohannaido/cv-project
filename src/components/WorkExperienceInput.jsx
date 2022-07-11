import React, { Component } from "react";
import '../styles/WorkExperienceInput.css';

class WordExperienceInput extends Component{
    constructor(props){
        super(props);
        this.updateDetails = this.updateDetails.bind(this);
    }

    updateDetails(e, index){
        this.props.updateWorkExperience(index, e.target.name, e.target.value);
    }

    render(){
        const details = this.props.data;
        const index = this.props.index;

        return(
            <div className="workexperience-input-div" key={index}>
                <input type="text" name="companyname" placeholder="Company" value={details.companyname} onChange={(e) => this.updateDetails(e, index)} />
                <input type="text" name="position" placeholder="Position" value={details.position} onChange={(e) => this.updateDetails(e, index)} />
                <input type="text" name="startdate" placeholder="Start Date" value={details.startdate} onChange={(e) => this.updateDetails(e, index)} />
                <input type="text" name="enddate" placeholder="End Date" value={details.enddate} onChange={(e) => this.updateDetails(e, index)} />
                <input type="text" name="description" placeholder="Description" value={details.description} onChange={(e) => this.updateDetails(e, index)} />
                <button className="delete-btn" type="button" onClick={() => this.props.deleteWorkExperience(index)}>Delete</button>
            </div>
        )
    }
}

export default WordExperienceInput;