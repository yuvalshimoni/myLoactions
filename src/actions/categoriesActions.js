

/*
* action types
*/
export const GET_CATEGORIES = "GET_CATEGORIES" 
export const ADD_CATEGORY = "ADD_CATEGORY" 
export const UPDATE_CATEGORY = "UPDATE_CATEGORY" 
export const REMOVE_CATEGORY = "REMOVE_CATEGORY" 

/*
* action creators
*/

export const getCategories = ( payload ) => (
   {
       type: GET_CATEGORIES,
       payload
   }
)

export const addCategory = ( payload ) => (
   {
       type: ADD_CATEGORY,
       payload
   }
)

export const updateCategory = ( id, payload ) => (
    {
        type: UPDATE_CATEGORY,
        id,
        payload
    }
 )

 export const removeCategory = ( id ) => (
    {
        type: REMOVE_CATEGORY,
        id
    }
 )


/*
* thunk action 
*/

