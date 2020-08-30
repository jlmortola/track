import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Account from 'screens/Account'
import ResolveAuth from 'screens/ResolveAuth'
import Signin from 'screens/Signin'
import Signup from 'screens/Signup'
import TrackCreate from 'screens/TrackCreate'
import TrackDetail from 'screens/TrackDetail'
import TrackList from 'screens/TrackList'
import AuthProvider from 'context/auth'
import TrackProvider from 'context/track'
import { navigationRef, setNavigation } from 'utils/navigation'

const switchNavigator = createSwitchNavigator({
  ResolveAuth,
  loginFlow: createStackNavigator({
    Signup,
    Signin
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList,
      TrackDetail
    }),
    TrackCreate,
    Account
  })
})

const AppContainer = createAppContainer(switchNavigator)


const App = () => (
  <AuthProvider>
    <TrackProvider>
      <AppContainer ref={(navigation) => setNavigation(navigation)} />
    </TrackProvider>
  </AuthProvider> 
)

export default App