import React from 'react'
import { connect } from 'react-redux'

import { IApplicationState } from '../../@dotzApp/model/types'
import { IExtractContainer } from './types'

import { ExtractView } from '../../views/extract'

const ExtractContainer: React.FC<IExtractContainer> = (props) => {
  return (
    <ExtractView
      dotzPoints={props.cash.dotzBalance}
      money={props.cash.moneyBalance}
    />
  )
}

const mapStateToProps = (state: IApplicationState) => ({
  cash: state.cash
})

const ExtractContainerExp = connect(mapStateToProps, {})(ExtractContainer)
export { ExtractContainerExp }
