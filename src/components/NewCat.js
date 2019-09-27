import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Form,
    Input
  } from 'semantic-ui-react'
  
  import { addCategory } from '../actions/categoriesActions'
  //hooks
  import useHandleInput from '../hooks/useHandleInput'

function NewCat ({dispatch, callBack}){

     const {value, handleChange, setValue} = useHandleInput('')

     const handleSubmit = (e) => {
       e.preventDefault()
        
        // Add new cat
        const id = value.replace(/\s/g, '')
        dispatch( addCategory( { id, name: value }) )

        if (callBack) callBack()
        setValue('')
     }

    const vaild = ( value !== '')
    
    return (
       <div className='newCat'>
        <Form onSubmit={handleSubmit}>
        <Form.Group >
            <Form.Field
                onChange={(e) => handleChange(e)}
                control={Input}
                placeholder='Category Name'
            />
            <Form.Field control={Button} disabled={!vaild} >Submit</Form.Field>
         </Form.Group>
        </Form>
       </div>
    )

  }

  const mapStateToProps = ({}) => {

    return {}

  }

   export default connect(mapStateToProps)(NewCat)