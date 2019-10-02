// Libraries
import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux'

// Actions
import InitialStore from './actions/index'

// Components
import Footer from './components/Footer'
import DivWrp from './components/DivWrp'
import Loader from './components/Loader'
import RouterHandle from './components/RouterHandle'


function App ({ InitialApp })  {

      const [loading, setLoding] = useState( true )

      useEffect( () => {

        InitialApp().then( () => setLoding(false) )

      }, [])

      return (
        <Fragment>
              <DivWrp className="App-header">
                {loading === true && ( <div className="content centered appContent"><Loader /></div> )}

                {loading === false && (
                  <DivWrp className="content centered appContent">
                      <RouterHandle />
                  </DivWrp>
                )}
              </DivWrp>

            <Footer />
        </Fragment>
 

      
      )
  }
      

  const mapStateToProps = ( {} ) => {
      return {
       
      }
  }

  const mapDispatchToProps = ( dispatch ) => {
    return {
      InitialApp: () => dispatch( InitialStore() )
    }
  }

   export default connect ( mapStateToProps, 
                            mapDispatchToProps )(App)
