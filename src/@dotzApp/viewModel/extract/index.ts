import { action } from 'typesafe-actions'
import { ExtractTypes } from './types'

const getExtract = () => action(ExtractTypes.GET_EXTRACT)

export {
  getExtract
}
