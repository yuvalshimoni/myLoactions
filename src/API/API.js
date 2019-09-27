
export const STORAGE_KEY = 'MyLoctions';

const initailStore = {
    // categories: {
    //     1: {
    //         'id' : 1,
    //         'name': 'homes'
    //         //loactions: 
    //     },
    //     2: {
    //       'id' : 2,
    //       'name': 'goes'
    //       //loactions: 
    //    }
    // },
    // locations: {
    //     1: {
    //         'id': 1,
    //         'name': 'homes',
    //         'address': 'merav gilboa',
    //         'coordinates': '12.515.515',
    //         'category': 1
    //     }
    // }
  }


export async function fetchStore() {
    
    try {
        // can replace with DB
        let storeJson = await localStorage.getItem(STORAGE_KEY)

        if (storeJson !== null) {
            return JSON.parse(storeJson);
          } else {
            storeData( initailStore )
            return initailStore;
          }

      } catch (e) {
        console.log(e)
    }

  }

export const storeData = async ( data ) => {
    try {
      await localStorage.setItem(STORAGE_KEY, JSON.stringify( data ))
    } catch (e) {
      // saving error
    }
  }

  export const clearAll = async () => {
    try {
      await localStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }