import React, { Component } from 'react';
import Firebase from '../firebase/index';
import '../styles.css';

class ToDoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      updatedDogName: '',
    };
  }

  deletePosting = () => {
    console.log('deleted!');
    this.props.delete(this.props.id);
  }

  // editPosting = () => {
  //   console.log('Editing!');
  //   this.setState({
  //     editing: true
  //   });
  // }

  // changeNewTitle = (event) => {
  //   this.setState({
  //     updatedDogName: event.target.value
  //   });
  // }

  // update = () => {
  //   this.props.update(this.props.id, this.state.updatedDogName);
  //   this.setState({
  //     editing: false,
  //   });
  // }

  
  render() {
    // let editOptions = null;
    // if(this.state.editing) {
    //   editOptions = (
    //     <div>
    //       <input value={this.state.updatedDogName} onChange={this.changeNewTitle} />
    //       <button onClick={this.update}>Update!</button>
    //     </div>
    //   );
    // }
    // else {
    //   editOptions = (
    //     <button onClick={this.editPosting} >Edit!</button>
    //   );
    // }

    return (
      <div className='todoPostStyle'>
        <p>{this.props.title}</p>
        <p>{this.props.task}</p>
        <button onClick={this.deletePosting} >Delete!</button>
      </div>
    )
  }
}

export default ToDoPost;
