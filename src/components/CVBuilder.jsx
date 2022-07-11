import React, { Component } from "react";
import '../styles/cvbuilder.css'
class CVBuilder extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="cv-inputs-div">
                <h1>Enter Your Details</h1>
                <form className="cv-inputs-form">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="title" placeholder="Title"/>
                    <input type="number" name="phonenumber" placeholder="Phone Number"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="text" name="address" placeholder="Address"/>
                    <textarea name="description" id="" rows="5" placeholder="Description"></textarea>
                </form>
            </div>
        )
    }
}

export default CVBuilder;