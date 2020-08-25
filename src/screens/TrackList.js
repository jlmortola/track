import React from 'react'
import { Button, FlatList, Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'

const TrackList = ({ navigation }) => {
  return (
    <View>
      <Text>Hello</Text>
      <Button title="Go to track detail" onPress={() => navigation.navigate('TrackDetail')} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TrackList
