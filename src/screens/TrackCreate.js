import 'utils/mockLocation'
import React, { useCallback }  from 'react'
import { Button, FlatList,  StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from 'components/Map'
import { useTrackContext } from 'context/track'
import useLocation from 'utils/hooks/useLocation'
import TrackFrom from 'components/TrackForm'

const TrackCreate = ({ isFocused }) => {
  const { state: {isRecording, locations}, addLocation } = useTrackContext()

  const callback = useCallback(location => { addLocation(location, isRecording) }, [isRecording])

  const [error] = useLocation(isFocused || isRecording, callback)

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Map /> 
      {error ? <Text>{error}</Text> : null}
      <TrackFrom />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreate)
