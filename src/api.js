const apiURL = 'https://se-weather-api.herokuapp.com/api/v1/'

export const getLocation = async zipCode => {
  let res = await fetch(`${apiURL}geo?zip_code=${zipCode}`)
  res = await res.json()
  return res
}

export const getForecast = async (lat, long, date) => {
  let res = await fetch(`${apiURL}forecast?latitude=${lat}&longitude=${long}&date=${date}`)
  res = await res.json()
  return res
}
