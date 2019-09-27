import { storeData } from '../API/API'
import {  GET_CATEGORIES } from '../actions/categoriesActions'
import {  GET_LOCATIONS } from '../actions/locationsActions'

const localStorgeMid = store => next => action => {

    const returnValue = next(action);

    if ( action.type !== GET_CATEGORIES 
      && action.type !== GET_LOCATIONS 
      && action.type !== 'START_ASYNC_ACTION' 
      && action.type !== 'STOP_ASYNC_ACTION'  ) 
    {
         console.group('Update Storage');

         const { categories, locations } = store.getState()
         storeData( { categories, locations } )
         console.log('Update asyncStorage:', { categories, locations } )
         console.groupEnd();
    }


    return returnValue;
    
  };

  export default localStorgeMid