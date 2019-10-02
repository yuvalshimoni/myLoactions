import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
  
  import { addLocation } from '../actions/locationsActions'

  //hooks
  import useForm from '../hooks/useForm'

function NewLoaction ({dispatch,options, callBack}){

    const initialValues = {    
        name: '',
        address: '',
        lat: '',
        lng: '',
        category: ''
    }

     const { values, handleChange, setValues } = useForm(initialValues)

     const handleSelect = (e, { value }) => {
        handleChange('category', value)
     }

     const handleSubmit = ( ) => {
        // Add new loaction
        const id = values.name.replace(/\s/g, '')
        dispatch( addLocation( { id, ...values }) )

         if (callBack) callBack()
         setValues({})
     }

    const { name, address, lat, lng, category } = values

    const vaild = ( name != '' ) 
                  && ( address != '' )
                  && ( lat != ''  )
                  && ( lng != '' )
                  && ( category != '' )

    return (
       <div className='newCat'>
        <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Input fluid onChange={(e) => handleChange('name', e.target.value)}  placeholder='Name' />
                <Form.Input fluid onChange={(e) => handleChange('address', e.target.value)} placeholder='Address' />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input fluid onChange={(e) => handleChange('lat', e.target.value)} placeholder='Latitude' />
                <Form.Input fluid onChange={(e) => handleChange('lng', e.target.value)} placeholder='longitude' />
                <Form.Select
                    fluid
                    onChange={ handleSelect }
                    options={options}
                    placeholder='Categoty'
                />
            </Form.Group>
            <Form.Button disabled={!vaild}>Submit</Form.Button>
        </Form>
       </div>
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

export default connect(mapStateToProps)(NewLoaction)
