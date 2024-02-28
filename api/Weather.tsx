import axios from 'axios'
import { string } from 'prop-types'

const apiKey = '922c37e298f34fa9a64215501242802'

interface Params {
  city: string;
  days: string;
}


const forecastEndpoint = (params: Params) => `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.city}&days=${params.days}&aqi=no&alerts=no`
const locationEndpoint = (params: Params) => `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.city}`

const apiCall= async (endpoint: string) =>{
    const options = {
        method: 'GET',
        url: endpoint
    } 
    try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log('error:', error)
        return 0
    }
}

export const fetchWeatherForecast = (params: Params) => {
    return apiCall(forecastEndpoint(params))
}

export const fetchLocation = (params: Params) => {
    return apiCall(locationEndpoint(params))
}