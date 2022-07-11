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
      workexperienceArr: [
        {
          companyname: "Dell",
          position: "Software Dev",
          startdate: "2019",
          enddate: "2021",
          description: " this is a basic example descripton for the cv project thatj is being",
        }, {
          companyname: "Apple",
          position: "Web Dev",
          startdate: "2017",
          enddate: "2019",
          description: " MAC BOOK this is a basic example descripton for the cv project thatj is being",
        }
      ],
      educationArr: [
        {
          coursename: "Odin",
          university: "Odin Project",
          startdate: "2022",
          enddate: "Present",
          description: "Best Full Stack Free Course",  
        }
      ]
    }

    this.updateBasicDetail = this.updateBasicDetail.bind(this);
    this.addNewWorkExperience = this.addNewWorkExperience.bind(this);
    this.updateWorkExperience = this.updateWorkExperience.bind(this);
    this.deleteWorkExperience = this.deleteWorkExperience.bind(this);

    this.addNewEducation = this.addNewEducation.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }
  
  updateBasicDetail(name, value) {
    this.setState({
      basic:{
          ...this.state.basic, 
          [name] : value
      }
    });
  }

  addNewWorkExperience(){
    let newWorkexArr = [...this.state.workexperienceArr, {
      companyname: "",
      position: "",
      startdate: "",
      enddate: "",
      description: "",
    }];

    this.setState({
      workexperienceArr: [...newWorkexArr],
    });
  }

  updateWorkExperience(index, name, value){
    let newWorkexArr = [...this.state.workexperienceArr];
    newWorkexArr[index][name] = value;

    this.setState({
      workexperienceArr: [...newWorkexArr],
    });
  }

  deleteWorkExperience(index){
    let newWorkexArr = this.state.workexperienceArr.filter((value, i) => i != index );

    this.setState({
      workexperienceArr: [...newWorkexArr],
    });
  }

  addNewEducation(){
    let newEducation = [...this.state.educationArr, {
      coursename: "",
      university: "",
      startdate: "",
      enddate: "",
      description: "",  
    }];
    this.setState({
      educationArr: [...newEducation]
    })
  }

  updateEducation(index, name, value){
    let newEducation = [...this.state.educationArr];
    newEducation[index][name] = value;

    this.setState({
      educationArr: [...newEducation]
    });
  }

  deleteEducation(index){
    let newEducation = this.state.educationArr.filter((value, i) => i != index );

    this.setState({
      educationArr: [...newEducation],
    })
  }

  render() {

    return (
      <div className="App">
      <div id="content">
        <CVBuilder basicDetails={this.state.basic} updateBasicDetails={this.updateBasicDetail} 
        workexperienceArr={this.state.workexperienceArr} educationArr={this.state.educationArr} 
        updateWorkExperience={this.updateWorkExperience} deleteWorkExperience={this.deleteWorkExperience} addNewWorkExperience={this.addNewWorkExperience} 
        addNewEducation={this.addNewEducation} updateEducation={this.updateEducation} deleteEducation={this.deleteEducation} 
        />
        
        <CVDisplay basicDetails={this.state.basic} workexperienceArr={this.state.workexperienceArr} educationArr={this.state.educationArr} />
      </div>
    </div>
  );
}
}

export default App;
