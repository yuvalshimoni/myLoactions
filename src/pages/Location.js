import React, { useState } from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'

function Location ({ name, history, categoryName, address, lat, lng })  {

    const [toggleMap, setToggleMap] = useState( false )

    const center = {
        lat: parseFloat(lat),
        lng:  parseFloat(lng)
      }
    return (
        <div className="loactionPage">

            <div className="headPage clr">
                <h1>{name}</h1>
                <div className='linkBtn' onClick={ () => history.goBack() }>Back</div>
            </div>

            <div className='box'>
                <div className='head'>
                    <div className="btns">
                        <h4 className={toggleMap === false ? 'active' : ''} onClick={() => setToggleMap( false )}>Properties</h4>
                        <h4 className={toggleMap === true ? 'active' : ''}  onClick={() => setToggleMap( true )}>map</h4> 
                    </div>
                </div>

                <div className='inner'>
                    { toggleMap === false 
                    ?
                    <div className='card'>
                            <ul>
                                <li><h5>Category:</h5> <span>{categoryName}</span></li>
                                <li><h5>Address:</h5> <span>{address}</span></li>
                                <li><h5>Coordinates:</h5> <span>{`${lat}, ${lng}`}</span></li>
                            </ul>
                        </div>
                     :
                    <div className='map'>
                            <Map center={center}/>
                    </div>
                    }
                </div>
            </div>

        </div>
    )


}

const mapStateToProps = ({locations, categories}, {match}) => {

    const data = locations[match.params.id]
    //console.log( data.category )
    return {
        ...data,
        categoryName: categories[data.category].name
    }

  }

   export default connect(mapStateToProps)(Location)
      