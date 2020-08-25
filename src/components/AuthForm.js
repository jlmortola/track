import React, { useState }  from 'react';
import { Button, Input, Text } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import Spacer from 'components/Spacer'

const AuthForm = ({ errorMessage, onSubmit, submitText, title }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Spacer>
        <Text h3>{title}</Text>
      </Spacer>
      <Input label="email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
      <Input label="password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }
      <Spacer>
        <Button title={submitText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15
  },
})

export default AuthForm;