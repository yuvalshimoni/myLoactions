import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

//Components
import HeadPage from '../components/HeadPage'
import TrLocation from '../components/TrLocation'
import NewLoaction from '../components/NewLocation'
import FiltersLocations from '../components/FiltersLocations'
 
function Locations ({locations,categoriesValues, categories}) {

        const [categoryShow, setCategoryShow] = useState( 'all' )
        const [order, setOrder] = useState( 'ungrouped' )
        const [openForm, setOpenForm] = useState( !(locations.length > 0) )

        if ( locations.length === 0 && categoriesValues.length === 0 ) return (
            <div>
                <h4>You need to add category first</h4> <Link to={'/categories'} style={{fontSize: 40}}> Start! </Link>
            </div>
        )
        
        let showLocations = locations
        let locationsByCategory = ByCategory(locations)
       
        if ( order === 'alphabetical') showLocations.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })

        if ( order === 'ungrouped') showLocations = locations
        if ( categoryShow !== 'all' ) showLocations = locations.filter( ({category}) => { if ( category === categoryShow ) return true })
        if ( categoryShow !== 'all' && order === 'category') {
            locationsByCategory = []
            locationsByCategory[categoryShow] = ByCategory(locations)[categoryShow]
        }

        function ByCategory( locations ) {

                const locationsByCategory = [];
        
                locations.forEach( (location) => {
                    const catId= location.category;
        
                    if ( locationsByCategory[catId] ) {
                        locationsByCategory[catId].push( location );
                    } else {
                        locationsByCategory[catId] = [ location ];
                    }
                })
        
            return locationsByCategory;
        }

        return (
        <div className='categoriesPage'>

            <HeadPage
                    title={'Locations'}
                    clickBtnFunc={ () => setOpenForm( !openForm ) } />

             {openForm && (
                 <NewLoaction callBack={ () => setOpenForm(false) }/>
             )}

            {!openForm && (
                 <FiltersLocations 
                    categoryShow={categoryShow}
                    setCategoryShow={ setCategoryShow }
                    order={order}
                    setOrder={ setOrder }
                    />
            )}

            <ul className="List clr">
                {order !== 'category' 
                ?
                <Fragment>
                    {showLocations.map( item => (
                    <TrLocation 
                            key={item.name} 
                            item={item} />
                    ))}
                </Fragment>
                :
                <Fragment>
                    {Object.keys(locationsByCategory).map( cat => (
                        <Fragment>
                        <h4 style={{textAlign: 'left'}}>{categories[cat].name}</h4>
                         {locationsByCategory[cat].map( item => (
                             <TrLocation 
                                     key={item.name} 
                                     item={item} />
                         ))}
                      </Fragment>
                    )
                    )}
                </Fragment>
                }

            </ul>

        </div>
        )

}

const mapStateToProps = ( { locations, categories } ) => {

    return { 
        locations: Object.values( locations ),
        categoriesValues: Object.values( categories ),
        categories
    }
}
export default connect( mapStateToProps )(Locations)