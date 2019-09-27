import { combineReducers } from 'redux'

import categories from '../reducers/categoriesReducer'
import locations from '../reducers/locationsReducer'

export default combineReducers({
    categories,
    locations
})

