
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { useAuthContext } from 'context/auth'
import AuthForm from 'components/AuthForm'
import Spacer from 'components/Spacer'

const Signin = ({ navigation }) => {
  const { clearErrorMessage, signin, state: { errorMessage } } = useAuthContext()

  return (
    <View style={styles.container}>
    <NavigationEvents onWillFocus={clearErrorMessage} />
    <AuthForm onSubmit={signin} errorMessage={errorMessage} title="Sign in for Tracker" submitText="Sign in"/>
    <Spacer />
    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
      <Text style={styles.link}>Don't have an account? Click hee to sign up</Text>
    </TouchableOpacity>
  </View>
  )
}

Signin.navigationOptions = () => {
  return {
    header: () => false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150
  },
  link: {
    color: 'blue'
  }
})

export default Signin
