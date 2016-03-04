import React, { Component }from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityDate) {
    const name = cityDate.city.name;
    const temps = cityDate.list.map(weather => weather.main.temp);
    const pressure = cityDate.list.map(weather => weather.main.pressure);
    const humidity = cityDate.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityDate.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}  /></td>
        <td><Chart data={temps} color="red"/></td>
        <td><Chart data={pressure} color="green"/></td>
        <td><Chart data={humidity} color="blue"/></td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
