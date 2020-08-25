import 'utils/mockLocation'
import React, { useState, useEffect }  from 'react'
import { Button, FlatList,  StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import Map from 'components/Map'

const TrackCreate = () => {
  const [error, setError] = useState('')

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();

      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, location => {
        console.log("startWatching -> location", location)
      })
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    startWatching()
  }, [])
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Map />
      {error ? <Text>{error}</Text> : null}
      <Text>Hello</Text>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({})

export default TrackCreate
