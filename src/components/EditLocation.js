import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Form,
    Input
  } from 'semantic-ui-react'
  
  import { updateLocation } from '../actions/locationsActions'
  //hooks
  import useForm from '../hooks/useForm'

function EditLoaction ({dispatch, item, options, callBack}){

    const initialValues = {    
        'id':  item.id,
        'name':  item.name,
        'address': item.address,
        'lat': item.lat,
        'lng': item.lng,
        'category': item.category
    }
    
     const { values, handleChange } = useForm(initialValues)
     const { id, name, address,category, lat, lng  } = values


     const handleSelect = (e, { value }) => {
        handleChange('category', value)
     }

     const handleSubmit = ( ) => {

        dispatch( updateLocation(id, { id: values.name.replace(/\s/g, ''), ...values}) )
        if (callBack) callBack()
  
    }
    
    return (
       <div className='newCat' style={{width: '100%'}}>
        <Form onSubmit={ handleSubmit } style={{width: '100%'}}>
            <Form.Group widths='equal'>
                <Form.Input fluid 
                            value={name}
                            onChange={(e) => handleChange('name', e.target.value)}  
                            placeholder='Name' />
                <Form.Input fluid 
                            value={address}
                            onChange={(e) => handleChange('address', e.target.value)} 
                            placeholder='Address' />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input fluid 
                            value={lat}
                            onChange={(e) => handleChange('lat', e.target.value)}
                            placeholder='Latitude' />
                <Form.Input fluid 
                            value={lng}
                            onChange={(e) => handleChange('lng', e.target.value)} 
                            placeholder='longitude' />
                <Form.Select
                    fluid
                    value={category}
                    onChange={ handleSelect }
                    options={options}
                    placeholder='category'
                />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
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

   export default connect(mapStateToProps)(EditLoaction)