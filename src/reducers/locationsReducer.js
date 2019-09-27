import { 
    GET_LOCATIONS,
    ADD_LOCATION,
    REMOVE_LOCATION
 } from '../actions/locationsActions' 

 export default function locations ( state = {}, action ) {

    switch (action.type) {
        case GET_LOCATIONS:
          return {
                ...action.payload
          }
        case ADD_LOCATION:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case REMOVE_LOCATION:
          const { id } = action
          delete state[id]
          return { 
              ...state
          }
        default: return state
      }

}
