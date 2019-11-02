import React from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';

const testData = [
  {
    id: '33434343',
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook'
  },
  {
    id: '33534343',
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu'
  },
  {
    id: '33434373',
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook'
  }
];

class App extends React.Component {
  state = {
    profiles: testData,
    userName: ''
  };

  handleFormChange = event => {
    this.setState({ userName: event.target.value });
  };

  handleSubmit = async (e, props) => {
    e.preventDefault();
    const url = await fetch(`https://api.github.com/users/${this.state.userName}`);
    const resp = url.json();
    props.onSubmit(resp);
    this.setState({ userName: '' });
    console.log('submitted');
  };

  addNewProfile = profileData => {
    console.log('profileData', profileData);
    this.setState(prevState => ({
      profiles: [profileData, ...prevState.profiles]
    }));
  };

  render() {
    return (
      <div className="App">
        <Form
          onSubmit={this.addNewProfile}
          handleSubmit={this.handleSubmit}
          userName={this.state.userName}
          handleFormChange={this.handleFormChange}
        />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
