import React from 'react';
import { Input, Button } from 'react-native-elements'
import { useTrackContext } from 'context/track'
import Spacer from 'components/Spacer'

const TrackForm = () => {
  const { state: { name, isRecording, locations }, changeName, saveTrack, startRecording, stopRecording } = useTrackContext()
  
  const onPress = () => saveTrack(name, locations)
  return (
    <Spacer>
      <Input placeholder="enter name" onChangeText={changeName} value={name}/>
      { isRecording 
        ? <Button title="stop recording" onPress={stopRecording} />
        : <Button title="start recording" onPress={startRecording} />
      }
      {
        !isRecording && locations.length 
        ? <Button title="save locations" onPress={onPress}/>
        : null
      }
    </Spacer>
  );
};

export default TrackForm;