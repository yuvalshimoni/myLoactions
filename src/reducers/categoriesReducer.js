import { 
    GET_CATEGORIES,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    REMOVE_CATEGORY
 } from '../actions/categoriesActions' 

export const categories = ( state = {}, action ) => {

    switch (action.type) {
        case GET_CATEGORIES:
          return {
                ...action.payload
          }
          break;
        case ADD_CATEGORY:
            const { payload } = action
            return {
                ...state,
                [payload.id]: payload
            }
            break;
        case UPDATE_CATEGORY:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    'name': action.payload
                }
        }
        break;
        case REMOVE_CATEGORY:
            const { id } = action
            delete state[id]
            return { 
                ...state
            }
        default: return state
      }

}

export default categories 