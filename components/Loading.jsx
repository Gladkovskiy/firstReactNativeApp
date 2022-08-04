import React from 'react'
import {StatusBar, StyleSheet, Text, View} from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.text}>Получение погоды...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#fdf6aa',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 24,
  },
})
