import { Reducer } from 'redux'
import { ExtractState } from './state'
import { ExtractTypes } from '../../viewModel/extract/types'

const INITIAL_STATE: ExtractState = {
  // id: null,
  // coinType: '',
  // value: null,
  // type: ''
	transactions: []
}

const extractReducer: Reducer<ExtractState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExtractTypes.GET_EXTRACT:
      return { ...state, transactions: action.payload }
    default:
      return { ...state }
  }
}

export type { ExtractState }
export { extractReducer }
