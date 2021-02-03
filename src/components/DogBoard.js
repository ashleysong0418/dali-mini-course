import React, { Component } from 'react';
import { Map } from 'immutable';
import DogPosting from './DogPosting';

class DogBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: Map(),
      dogId: 0,
      newDogName: '',
      newDogBreed: '',
      newDogImage: '',
    }
  }

  newDogNameFunction = (event) => {
    this.setState({
      newDogName: event.target.value
    });
  }
  newDogBreedFunction = (event) => {
    this.setState({ 
      newDogBreed: event.target.value
    });
  }
  newDogImageFunction = (event) => {
    this.setState({
      newDogImage: event.target.value
    });
  }

  saveDogInfo = () => {
    let dogData = {
      name: this.state.newDogName,
      breed: this.state.newDogBreed,
      image: this.state.newDogImage,
    }
    this.setState({
      dogs: this.state.dogs.set(this.state.dogID, dogData),
      dogID: this.state.dogID + 1
    });

  }

  render () {
    const allDogs = this.state.dogs.entrySeq().map(
      ([id, dog]) => {
        return (
          <DogPosting
            name={dog.name}
            breed={dog.breed}
            dogURL={dog.image}
            key={id}
          />
        );
      }
    );
    return (
      <div>
        <p> this is the dog board! </p>
        {allDogs}
        <p>Add a dog!</p>
        <p>Enter Name:</p>
        <input type="text" value={this.state.newDogName} onChange={this.newDogNameFunction} />

        <p>Enter Breed:</p>
        <input type="text" value={this.state.newDogBreed} onChange={this.newDogBreedFunction} />

        <p>Enter Image URL:</p>
        <input type="text" value={this.state.newDogImage} onChange={this.newDogImageFunction} />

        <button onClick={this.saveDogInfo}>Save!</button>
      </div>
    )
  }
}

export default DogBoard;