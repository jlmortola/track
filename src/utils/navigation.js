import { createRef } from 'react';
import { NavigationActions } from 'react-navigation'

let navigation

export const setNavigation = (nav) => navigation = nav

export const navigationRef = createRef()

export const navigate = (routeName, params) => {
  navigation.dispatch(
   NavigationActions.navigate({
     routeName,
     params
   })
 )
}