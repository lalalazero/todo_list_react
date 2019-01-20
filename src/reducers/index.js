import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import userInfo from './userInfo'
import control from './control'
import list from './list'

const reducers = combineReducers({
    todos,
    visibilityFilter,
    userInfo,
    control,
    list,
});
export default reducers;
