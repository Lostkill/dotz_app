import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginContainer } from '../../containers/login'
import { RegisterContainer } from '../../containers/register'
import { HomeContainerExp } from '../../containers/home'
import { ScannerContainerExp } from '../../containers/scanner'
import { ExtractContainerExp } from '../../containers/extract'

import { IApplicationState } from '../../@dotzApp/model/types'
import { IAppRoute } from './types'

const Stack = createStackNavigator()
const Routes: React.FC<IAppRoute> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={props.login.auth ? 'home' : 'login'}>
        {
          props.login.auth
            ? (
              <Fragment>
                <Stack.Screen name="home" component={HomeContainerExp} />
                <Stack.Screen name="payment" component={ScannerContainerExp} />
                <Stack.Screen name="extract" component={ExtractContainerExp} />
              </Fragment>
            )
            : (
              <Fragment>
                <Stack.Screen name="login" component={LoginContainer} />
                <Stack.Screen name="register" component={RegisterContainer} />
              </Fragment>
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = (state: IApplicationState) => ({
  login: state.login
})

const RouteExp = connect(mapStateToProps, {})(Routes)
export { RouteExp }
