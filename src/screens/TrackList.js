import React from 'react'
import { Button, FlatList, Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'

import { NavigationEvents } from 'react-navigation'
import { useTrackContext } from 'context/track'

const TrackList = ({ navigation }) => {
  const {state: {tracks}, fetchTracks} = useTrackContext()

  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList 
        data={tracks}
        keyExtractor={item => item._id}
        renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
          <ListItem  chevron title={item.name}/>
        </TouchableOpacity>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TrackList
