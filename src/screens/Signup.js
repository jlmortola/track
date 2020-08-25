
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { useAuthContext } from 'context/auth'
import AuthForm from 'components/AuthForm'
import Spacer from 'components/Spacer'

const Signup = ({ navigation }) => {
  const { clearErrorMessage, signup, state: { errorMessage } } = useAuthContext()

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm onSubmit={signup} errorMessage={errorMessage} title="Sign up for Tracker" submitText="Sign up"/>
      <Spacer />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.link}>Have an account already? Click here to sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

Signup.navigationOptions = () => {
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

export default Signup
