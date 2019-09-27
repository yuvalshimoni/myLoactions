import React from 'react'
import { NavLink } from "react-router-dom"

export default () => (
        <header>
          <div className="centered">
            <ul className="nav">
              
              <li>
                <NavLink to='/categories' exact activeClassName='active'>Categories</NavLink>
              </li>
              <li>
                <NavLink to='/locations' exact activeClassName='active'>Locations</NavLink>
              </li>
            </ul>

          </div>
      </header>
  )
