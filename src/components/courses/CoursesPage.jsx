import React, {ReactPropTypes, Component} from 'react';
import {connect} from 'react-redux';

class CoursesPage extends Component{

    //creating constructor to initialise state for the form
    constructor(props, context){
        super(props, context);

        //assigning initial value of state
        this.state = {
            course:{title:""}
        };

        //this is the best place to bind functions to classes, that way it will only be bound once not every time this function is called
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onClickSave(){
        alert(`Saving the object course ${this.state.course.title}`);
    }

    onTitleChange(event){
        //we take out the entire course object, then dissect the title out of it and add in a new title and then set back the course. Why we did it the hard way ie because we only need to change one value; lets suppose course had multiple values then we only wanted to change one value not the entire course ; so take the object out change what you have to and then put back the object as it is... ALT+Z for text wrap in vscode
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }
    render(){
        return(
            <div>
                <h1>Courses</h1>
                <h2>Add Courses</h2>

                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>


                <input type="button" class="btn btn-primary btn-sm" value="save" onClick={this.onClickSave}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);