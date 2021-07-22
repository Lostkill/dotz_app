import { action } from 'typesafe-actions'
import { ExtractTypes } from './types'

const getExtract = (extractHistory) => action(ExtractTypes.GET_EXTRACT(extractHistory))

export {
  getExtract
}
