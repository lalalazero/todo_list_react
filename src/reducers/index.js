import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import userInfo from './userInfo'

const reducers = combineReducers({
    todos,
    visibilityFilter,
    userInfo
});
export default reducers;