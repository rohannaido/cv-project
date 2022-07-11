import './App.css';
import React, { Component } from 'react';
import CVBuilder from './components/CVBuilder';
import CVDisplay from './components/CVDisplay';

class App extends Component {

  constructor(){
    super();
    this.state = {
      basic: {
        name: "John Doe",
        title: "Web Developer",
        phonenumber: "99999 99999",
        email: "johndoe@gmail.com",
        address: "Hyderabad, Telangana",
        description: "asdf, this is a basic example descripton for the cv project thatj is being builtThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to ",
      },
      // workexperience: {
      //   companyname: "Dell",
      //   position: "Software Dev",
      //   startdate: "2019",
      //   enddate: "2021",
      //   description: " this is a basic example descripton for the cv project thatj is being",
      // },
      // workexperienceArr: [this.workexperience],
    }

    this.updateBasicDetail = this.updateBasicDetail.bind(this);

  }
  
  updateBasicDetail(name, value) {
    this.setState({
      basic:{
          ...this.state.basic, 
          [name] : value
      }
    });
  }

  render() {

    return (
      <div className="App">
      <div id="content">
        <CVBuilder basicDetails={this.state.basic} updateBasicDetails={this.updateBasicDetail} />
        {/* workexperience={this.state.workexperience} workexperienceArr={this.state.workexperienceArr} /> */}
        <CVDisplay basicDetails={this.state.basic} />
      </div>
    </div>
  );
}
}

export default App;
