import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import appReducer from './appReducer'

const rootReducers=combineReducers({
	account:accountReducer,
	app:appReducer
})
export default rootReducers