import React, { useState } from 'react';
import { connect } from 'react-redux'


//Components
import HeadPage from '../components/HeadPage'
import TrCategory from '../components/TrCategory'
import NewCat from '../components/NewCat'

function Categories ({categories, dispatch}) {

        const [openForm, setOpenForm] = useState( !(categories.length > 0) )

        return (
        <div className='categoriesPage'>

            <HeadPage
                    title={'Categories'}
                    clickBtnFunc={ () => setOpenForm( !openForm ) } />

             {openForm && (
                 <NewCat callBack={ () => setOpenForm(false) }/>
             )}

            <ul className="List clr">
                {categories.map( item => (
                <TrCategory 
                        key={item.name} 
                        item={item} />
                ))}
            </ul>

        </div>
        )

}

const mapStateToProps = ( { categories } ) => {

    return { 
        categories: Object.values( categories )
    }
}
export default connect( mapStateToProps )(Categories)