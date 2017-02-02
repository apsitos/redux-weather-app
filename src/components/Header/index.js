import React from 'react';
// import { connect } from 'react-redux';

const Header = (props) => {
  console.log('props-lat&long', props.data)
  return (
    <div>
      <h1>Header</h1>
      <p>{props.data.lat}</p>
      {props.data.location ? <p>{props.data.location.city}</p> : <p>not loaded yet!</p>}

    </div>
  )
}

export default Header;
