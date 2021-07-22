import extractData from './data.json'
import { store } from '../../../config/store'
import { getExtract } from '../../viewModel/extract'

const getExtractResource = () => {
	return new Promise((resolve) => {
		resolve(extractData.transactions)
	})
		.then(data => store.dispatch(getExtract(data)))
		.catch(err => console.log(err))
}

export {
	getExtractResource
}
