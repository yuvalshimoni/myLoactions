import React, { Fragment, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {
    Button,
    Form,
    Input
  } from 'semantic-ui-react'

import { removeCategory, updateCategory } from '../actions/categoriesActions'

  //hooks
  import useHandleInput from '../hooks/useHandleInput'

function TrCategory ({ item, dispatch })  {

    const {id, name} = item
    const { value, handleChange } = useHandleInput(name)
    const [editMode, setEditMode] = useState( false )

    const removeItem = (id) =>   dispatch(removeCategory(id))

    const handleSubmit = (id) =>  {
        dispatch(updateCategory(id,value))
        setEditMode( false ) 
    }

    return (
        <li className="listLi trCategory" key={id} >
            
            { editMode === false 
            ?
            ( 
            <Fragment>
                <h3>{name}</h3>
                <div className='edits'>
                    <span className="btns" onClick={ () => setEditMode( true ) }> <Icon  name='edit' size='large' /></span>
                    <span className="btns" onClick={ () => removeItem(id) }> <Icon  name='delete' size='large' /></span>
                </div> 
            </Fragment>
            )
            : <Fragment>
                <Form onSubmit={() => handleSubmit(id)}>
                        <Form.Group >
                            <Form.Field
                                value={value}
                                onChange={(e) => handleChange(e)}
                                control={Input}
                                placeholder='Category Name'
                            />
                            <Form.Field control={Button}>Submit</Form.Field>
                        </Form.Group>
                </Form>
                <div className='edits'>
                    <span style={{cursor: 'pointer'}} onClick={ () =>  setEditMode( false )  }> Cancal</span>
                </div> 
            </Fragment>
            }
        </li>
    )

}

const mapStateToProps = ({}) => {

    return {}

  }

export default connect(mapStateToProps)(TrCategory)

