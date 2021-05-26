// import { convertDate } from './utils'
import { getLocation, getForecast } from './api'

//Function to handle both GET requests for lat.,long. location and 3 day weather forecast
const renderForecast = async () => {

  //Send GET request to Location API to get Lat. and Long.
  const location = await getLocation(90210)

  //Render title element with city from getLocation() response
  const title = document.createElement('h1')
  title.innerHTML = `WEATHER FORECAST FOR ${location.city}`
  document.getElementById('app').appendChild(title)


  //Todays date in mm/dd/yyyy format
  let today = new Date()
  today = today.toLocaleDateString('en-US')

  //Todays day of the week (i.e. Monday)
  const dayOfTheWeekIndex = new Date().getDay()

  //Send GET request to Forecast API to get 5 day forecast
  const fiveDayForecast = await getForecast(location.latitude, location.longitude, today)

  //Only take the first 3 data sets since we only need 3 day forecast
  const threeDayForecast = fiveDayForecast.daily.data.slice(0, 3)

  //Render forecast components in DOM
  //Get day of the week for each forecast component
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  //Map through array of objects and render forecast component for each object
  const forecastWrapper = document.createElement('div')
  forecastWrapper.setAttribute('id', 'forecast-wrapper' )
  document.getElementById('app').appendChild(forecastWrapper)

  //Function to generate HTML code and to keep it DRY concept
  const renderHTML = (day, index) => {
    return (
      `
          <div class='forecast-item-wrapper'>
            <h2>${index === 0 ? 'Today' : daysOfTheWeek[dayOfTheWeekIndex + index]}:</h2>
            <div class='forecast-container'>
              <div class='weather-icon'>
                <p>${day.icon} image goes here</p>
              </div>
              <div class='forecast-details-container'>
                <p>${day.icon}</p>
                <p><strong>${day.temperatureMax}°</strong>/${day.temperatureMin}°F</p>
              </div>
            </div>
          </div>
          `
    )
  }

  document.getElementById('forecast-wrapper').innerHTML = threeDayForecast.map((day, index) => {
    if (index === 0) {
      return renderHTML(day, index)
    } else if (index === 1) {
      return renderHTML(day, index)
    } else if (index === 2) {
      return renderHTML(day, index)
    }
  }).join('')
}

renderForecast()
