import React, { Component } from "react";
import '../styles/cvbuilder.css'
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

        const { basicDetail, updateBasicDetails } = this.props;

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
                    

                    <h2 className="cv-builder-section-heading">Education</h2>
                </form>
            </div>
        )
    }
}

export default CVBuilder;