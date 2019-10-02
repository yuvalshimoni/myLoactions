import React, { Fragment, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

// Actions
import { removeLocation } from '../actions/locationsActions'

// Components
import EditLocation from './EditLocation'

function TrLocation ({ item, dispatch })  {

    const { id, name } = item
    const [editMode, setEditMode] = useState( false )

    const removeItem = (id) =>  dispatch( removeLocation(id) )

    return (
        <li className="listLi TrLocation" key={id} >
            
            { editMode === false 
            ?
            ( 
            <Fragment>
                <Link to={`location/${ id }`}> <h3>{name}</h3> </Link>
                <div className='edits'>
                    <span className="btns" onClick={ () => setEditMode( true ) }> <Icon  name='edit' size='large' /></span>
                    <span className="btns" onClick={ () => removeItem(id) }> <Icon  name='delete' size='large' /></span>
                </div> 
            </Fragment>
            )
            : <Fragment>
                <EditLocation item={item} callBack={ () => setEditMode( false ) } />
                <div className='edits open'>
                    <span style={{cursor: 'pointer'}} onClick={ () =>  setEditMode( false )  }> Cancal</span>
                </div> 
            </Fragment>
            }
        </li>
    )

}

const mapStateToProps = ({categories}) => {

    const options = Object.values( categories ).map( item => ({
         key: item.id, 
         text: item.name, 
         value: item.id
    }))

    return {
        options
    }

  }

export default connect(mapStateToProps)(TrLocation)

