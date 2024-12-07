import WeatherIcon from './WeatherIcon'
import WeatherData from './WeatherData'
import './WeatherForecast.css'

function WeatherForecast({ forecast }) {
  return (
    <div className="weather">
      <WeatherIcon img={forecast.img} imgAlt={forecast.imgAlt} />
      <WeatherData
        day={forecast.day}
        conditions={forecast.conditions}
        time={forecast.time}
      />
    </div>
  )
}

export default WeatherForecast
