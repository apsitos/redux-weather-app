import React, { Component } from 'react';
import SettingsCity from '../SettingsCity';
import AddPin from '../AddPin';
import './settings-style.css';

export default class Settings extends Component {

  render() {
    const { data, receiveForecast, removePin } = this.props;
    return (
      <div>
        <p className='settings-p-tag'>Settings</p>
        <div className='container'>
          {data.map((city, i) => {
            return <SettingsCity key={ i } pinID={i} data={city} removePin={removePin} />
          })}
          <AddPin data={data} receiveForecast={receiveForecast} />
        </div>
      </div>
    )
  }
}
