

/*
* action types
*/
export const GET_LOCATIONS = "GET_LOCATIONS" 
export const ADD_LOCATION = "ADD_LOCATION" 
export const UPDATE_LOCATION = "UPDATE_LOCATION" 
export const REMOVE_LOCATION = "REMOVE_LOCATION" 

/*
* action creators
*/

export const getLocations = ( payload ) => (
   {
       type: GET_LOCATIONS,
       payload
   }
)

export const addLocation = ( payload ) => (
   {
       type: ADD_LOCATION,
       payload
   }
)

export const updateLocation = ( id, payload ) => (
    {
        type: ADD_LOCATION,
        id,
        payload
    }
 )

 export const removeLocation = ( id ) => (
    {
        type: REMOVE_LOCATION,
        id
    }
 )


/*
* thunk action 
*/

