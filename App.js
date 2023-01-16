import {StatusBar} from 'expo-status-bar'
import {Alert, StyleSheet, Text, View} from 'react-native'
import * as Location from 'expo-location'

import Loading from './components/Loading.jsx'
import Weather from './components/Weather.jsx'
import {useEffect, useState} from 'react'
import axios from 'axios'

const API_KEY = 'you api key'

export default function App() {
  const [status, requestPermission] = Location.useForegroundPermissions()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  const getPosition = async () => {
    try {
      await requestPermission()

      const {
        coords: {latitude, longitude},
      } = await Location.getCurrentPositionAsync()

      const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`
      )
      console.log(data)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      Alert.alert('Не могу определить местоположение', 'Очень жаль :(')
    }
  }

  useEffect(() => {
    getPosition()
  }, [])

  return isLoading ? <Loading /> : <Weather data={data} />
}
