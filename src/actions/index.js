
import { 
    fetchStore
} from '../API/API'

import { getCategories } from './categoriesActions'
import { getLocations } from './locationsActions'

function InitialStore() {
    return (dispatch) => {
        return fetchStore()
        .then( ({categories, locations})  => {
            dispatch(getCategories(categories))
            dispatch(getLocations(locations))
        })
        .catch( () => console.log("err-InitialStore"))
    }
}

export default InitialStore