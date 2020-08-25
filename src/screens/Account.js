import React from 'react'
import { FlatList, Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from 'components/Spacer'
import { useAuthContext } from 'context/auth'

const Account = () => {
  const { signout } = useAuthContext()

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text>Hello</Text>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default Account
