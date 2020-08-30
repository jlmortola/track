import React, { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

const useLocation = (isFocused, callback) => {
  const [error, setError] = useState('')
  const [subscriber, setSubscriber] = useState(null)
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();

      if (!granted) throw new Error('Location permission not granted');
      
      const sub = await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      },
        callback
      )

      setSubscriber(sub)
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    if (isFocused) startWatching()
    else {
      subscriber.remove()
      setSubscriber(null)
    }
    return () => {
      if(subscriber) subscriber.remove()
    }
  }, [isFocused, callback])

  return [error]

};

export default useLocation;