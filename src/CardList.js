import React from 'react';
import './App.css';
import Card from './Card';

const CardList = props => {
  return (
    <div className="gridView">
      {props.profiles.map(profile => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default CardList;
