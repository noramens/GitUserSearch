import React from 'react';
import './App.css';

const Form = props => {
  console.log(props.userName);
  return (
    <form onSubmit={props.handleSubmit}>
      <div style={{ fontWeight: 'bold' }}>Enter your GitHub user name</div>
      <div>
        <input
          className="search"
          value={props.userName}
          onChange={props.handleFormChange}
          type="text"
          placeholder="github name"
          required
        />
        <button className="form-button">add name</button>
      </div>
    </form>
  );
};

export default Form;
