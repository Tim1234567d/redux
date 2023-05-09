import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './cutomerReducer'

const rootReducer = combineReducers({
    cash:cashReducer,
    customer:customerReducer,
})

export const store = createStore(rootReducer)