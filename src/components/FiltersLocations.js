import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Grid } from 'semantic-ui-react'
  

const orderByoptions = [ 
    { key: 'alphabetical', text: 'By alphabetical', value: 'alphabetical' },
    { key: 'category', text: 'Grouped by category ', value: 'category' },
    { key: 'ungrouped', text: 'Ungrouped by category', value: 'ungrouped' },
]

function FiltersLocations ({options, setCategoryShow, categoryShow, order, setOrder}){

    const handleSelectCategory = (e, { value }) => setCategoryShow(value)
    const handleOrder = (e, { value }) => setOrder(value)

    return (
        <div className='FiltersLocations'>
        <Grid columns={2} divided>
                <Grid.Row>
                <Grid.Column>
                    <Form.Select
                                fluid
                                value={categoryShow}
                                onChange={ handleSelectCategory }
                                options={options}
                                label='category'
                                placeholder='category'
                    />
                </Grid.Column>
                <Grid.Column>
                <Form.Select
                        fluid
                        value={order}
                        onChange={ handleOrder }
                        options={orderByoptions}
                        label='order by'
                        placeholder='order by'
                />
                </Grid.Column>
                </Grid.Row>
        </Grid>
        </div>
    )

  }

  const mapStateToProps = ({categories}) => {

    let options = Object.values( categories ).map( item => ({
         key: item.id, 
         text: item.name, 
         value: item.id
    }))

    options.unshift(   {key: 'all', text: 'All Categories', value: 'all'} )  

    return {
        options
    }

  }

   export default connect(mapStateToProps)(FiltersLocations)