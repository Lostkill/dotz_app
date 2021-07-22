import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { IApplicationState } from '../../@dotzApp/model/types'
import { IExtractContainer } from './types'

import { ExtractView } from '../../views/extract'

import * as extractResources from '../../@dotzApp/model/extract/resources'

const ExtractContainer: React.FC<IExtractContainer> = (props) => {
  useEffect(() => {
    extractResources.getExtractResource()
  }, [])

  return (
    <ExtractView
      dotzPoints={props.cash.dotzBalance}
      money={props.cash.moneyBalance}
      extractHistory={props.extract ? props.extract.transactions : []}
    />
  )
}

const mapStateToProps = (state: IApplicationState) => ({
  cash: state.cash,
  extract: state.extract
})

const ExtractContainerExp = connect(mapStateToProps, {})(ExtractContainer)
export { ExtractContainerExp }
