import { combineReducers } from 'redux'
import listsReducer from './listsReducer'

const appReducers = combineReducers({
    lists: listsReducer
})

export default appReducers