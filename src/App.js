import React from "react";
import "./App.css";

const testData = [
  {
    id: "33434343",
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook"
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu"
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook"
  }
];

const CardList = (props) => {
  return (
    <div className='gridView'>
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );

    const resp = await url.json();
    this.props.onSubmit(resp);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ fontWeight: "bold" }}>Enter your GitHub user name</div>
        <div>
          <input
            className='search'
            value={this.state.userName}
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            }
            type='text'
            placeholder='github name'
            required
          />
          <button className='form-button'>add name</button>
        </div>
      </form>
    );
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} />
        <div className='info'>
          <div className='name'> {profile.name}</div>
          <div className='company'>{profile.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: testData
  };

  addNewProfile = (profileData) => {
    console.log("profileData", profileData);
    this.setState((prevState) => ({
      profiles: [profileData, ...prevState.profiles]
    }));
  };

  render() {
    return (
      <div className='App'>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
