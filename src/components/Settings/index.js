import React, { Component } from 'react';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state= {
      cityInput: ''
    }
  }

  getForecast(location, func) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/geolookup/q/${location}.json`)
    .then((response) => response.json())
    .then((data) => func(data))
  }

  render() {
    const { text, receiveForecast } = this.props;
    const { cityInput } = this.state;
    return (
      <div>
        <h2>Settings</h2>
        <input
          value={this.state.cityInput}
          onChange={ (e)=> this.setState({ cityInput: e.target.value })}
          placeholder='Enter a city'
        />
        <button
          onClick={ () => this.getForecast(cityInput, receiveForecast) }
        >BUTTON</button>
        <div>{text}</div>
      </div>
    )
  }
}
