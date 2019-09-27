import React from 'react'
import { NavLink } from "react-router-dom"
import { Icon } from 'semantic-ui-react'

export default () => (
        <footer>
         
            <ul className="nav">
              <li>
                <NavLink to='/categories' exact activeClassName='active'>
                     <Icon  name='list'  />
                    Categories
                </NavLink>
              </li>
              <li>
                <NavLink to='/locations' exact activeClassName='active'>
                    <Icon  name='point' />
                    Locations
                </NavLink>
              </li>
            </ul>

         
      </footer>
  )
