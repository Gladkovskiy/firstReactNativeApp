import React from 'react'
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

const Weather = ({data}) => {
  const {
    main: {temp},
    weather,
    name,
    wind: {speed},
  } = data

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <StatusBar barStyle={'light-content'} />

      <View style={styles.halfContainer}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`,
            height: 150,
            width: 150,
          }}
        />
        <Text style={styles.temp}>{Math.round(temp)} ℃</Text>
      </View>

      <View style={[styles.halfContainer, styles.startContainer]}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {weather[0].description}, ветер {speed} м/c
        </Text>
      </View>
    </LinearGradient>
  )
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 30,
  },
  temp: {
    fontSize: 36,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
})
