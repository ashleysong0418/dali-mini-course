import React, { Component } from 'react';

class DogPosting extends Component {
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

  editPosting = () => {
    console.log('Editing!');
    this.setState({
      editing: true
    });
  }

  changeNewTitle = (event) => {
    this.setState({
      updatedDogName: event.target.value
    });
  }

  update = () => {
    this.props.update(this.props.id, this.state.updatedDogName);
    this.setState({
      editing: false,
    });
  }

  render() {
    let editOptions = null;
    if(this.state.editing) {
      editOptions = (
        <div>
          <input value={this.state.updatedDogName} onChange={this.changeNewTitle} />
          <button onClick={this.update}>Update!</button>
        </div>
      );
    }
    else {
      editOptions = (
        <button onClick={this.editPosting} >Edit!</button>
      );
    }

    return (
      <div>
        <p>{this.props.name}, {this.props.breed}</p>
        <img src={ this.props.dogURL } alt='Image'/>
        <button onClick={this.deletePosting} >Delete!</button>
        {editOptions}
      </div>
    )
  }
}

// const DogPosting = (props) => {
//   return (
//     <div>
//       <p>{props.name}, {props.breed}</p>
//       <img src={ props.dogURL } alt='Image'/>
//     </div>
//   );
// }

export default DogPosting;
