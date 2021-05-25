// import { convertDate } from './utils'
import { getLocation, getForecast } from './api'

//Function to handle both GET requests for lat.,long. location and 3 day weather forecast
const renderForecast = async () => {

  //Send GET request to Location API to get Lat. and Long.
  const location = await getLocation(90210)
  console.log(location)

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
  console.log('5 day forecast is:', fiveDayForecast)

  //Only take the first 3 data sets since we only need 3 day forecast
  const threeDayForecast = fiveDayForecast.daily.data.slice(0, 3)
  console.log('3 day forecast is:', threeDayForecast)

  //Render forecast components in DOM
  //Get day of the week for each forecast component
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  //Map through array of objects and render forecast component for each object


}

renderForecast()
