import React, { Component } from 'react';
import Firebase from '../firebase/index';
import ToDoPost from './ToDoPost';

class ToDoBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allToDos: [],
      title: '',
      id: 0,
      task: '',
    }
  }
  newTitleFunction = (event) => {
    this.setState({ title: event.target.value });
  }
  newTaskFunction = (event) => {
    this.setState({ task: event.target.value });
  }

  saveNewToDo = () => { 
    Firebase.db.collection('todo').add({
      title: this.state.title,
      task: this.state.task,
      id: this.state.id
    }).then(ref => {
      console.log('document reference ID', ref.id)
      this.setState({
        id: this.state.id + 1,
      });
      }).catch(error => {
    console.log(error.message)
    });
  }

  fetchToDos = () => {
    const todoList = [];
    Firebase.db.collection('todo').get()
      .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          console.log(doc.data());
          // this.setState({
          //   allToDos: [...doc.data()]
          // })
          todoList.push(doc.data());
        })
      }).then(() => {
        this.setState({
          allToDos: todoList
        });
        console.log(this.state.allToDos);
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  // deleteToDo = (id) => {
  //   Firebase.db.collection('todo').where("id", "==", id).get()
  //     .then(querySnapshot => {
  //         querySnapshot.docs[0].ref.delete();
  //     }).then(() => {
  //       this.setState({

  //       })
  //     });
  // }

  updateDogName = (id, field) => {
    this.setState({
      dogs: this.state.dogs.update(id, (n) => {
        return Object.assign({}, n, field);
      })
    });
  }
  
  render() {
    const posts = this.state.allToDos;
    const allPosts = posts.map((todo) => {
        return (
          <ToDoPost
            title={todo.title}
            task={todo.task}
            delete={this.deleteToDo}
            id={todo.id}
          />
        );
      }
    );
    return (
      <div>
        <p> this is the dog board </p>
        {/* {allDogs} */}
        <p>Add a new To Do!</p>

        <p>Enter Title:</p>
        <input type="text" value={this.state.newDogName} onChange={this.newTitleFunction} />

        <p>Enter Task:</p>
        <input type="text" value={this.state.newDogBreed} onChange={this.newTaskFunction} />

        <button onClick={this.saveNewToDo}>Save To Do!</button>
        <div className='allToDos'>
          <button onClick={this.fetchToDos}> Show My To Dos!</button>
          {allPosts}
        </div>
      </div>
    );
  }
}

export default ToDoBoard;
