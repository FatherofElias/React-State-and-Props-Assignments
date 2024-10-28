import React, { Component } from 'react'; // Assignment 1

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: 'Alex',
      editMode: false,
      hobbies: ['Reading', 'Gaming', 'Coding']
    };
    this.changeName = this.changeName.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleHobbyChange = this.handleHobbyChange.bind(this);
    this.addHobby = this.addHobby.bind(this);
  }

  changeName() {
    this.setState({ name: 'Charlie' });
  }

  toggleEditMode() {
    this.setState(prevState => ({ editMode: !prevState.editMode }));
  }

  handleHobbyChange(index, event) {
    const newHobbies = this.state.hobbies.slice(); // Create a copy
    newHobbies[index] = event.target.value;
    this.setState({ hobbies: newHobbies });
  }

  addHobby() {
    this.setState(prevState => ({ hobbies: [...prevState.hobbies, ''] }));
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <p>Name: {this.state.name}</p>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={this.toggleEditMode}>
          {this.state.editMode ? 'View' : 'Edit'}
        </button>

        {this.state.editMode ? (
          <div>
            <h2>Edit Mode</h2>
            <input 
              type="text" 
              value={this.state.name} 
              onChange={(e) => this.setState({ name: e.target.value })} 
            />
            <h3>Hobbies</h3>
            {this.state.hobbies.map((hobby, index) => (
              <input
                key={index}
                type="text"
                value={hobby}
                onChange={(e) => this.handleHobbyChange(index, e)}
              />
            ))}
            <button onClick={this.addHobby}>Add Hobby</button>
          </div>
        ) : (
          <div>
            <h2>View Mode</h2>
            <ul>
              {this.state.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default UserProfile;