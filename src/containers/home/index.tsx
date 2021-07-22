import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { IApplicationState } from '../../@dotzApp/model/types'

import * as cashResources from '../../@dotzApp/model/cash/resources'

import { View } from 'react-native'

import { HomeView } from '../../views/home'
import { IHomeContainer } from './types'

const HomeContainer: React.FC<IHomeContainer> = (props) => {
  useEffect(() => {
    cashResources.getCashBalance(props.login.uuid)
  }, [])

  return (
    <View>
      <HomeView
        dotzBalance={props.cash.dotzBalance}
        money={props.cash.moneyBalance}
        username={props.login.name}
        navigator={props.navigation}
      />
    </View>
  )
}

const mapStateToProps = (state: IApplicationState) => ({
  login: state.login,
  cash: state.cash
})

const HomeContainerExp = connect(mapStateToProps, {})(HomeContainer)
export { HomeContainerExp }
