import React from 'react'
import {Link} from 'react-router-dom'
import * as UI from './style'


const AnimalList = ({ list }) => (
  list && (
    <UI.List >
      {
        list.map( item =>
          <UI.ListItem key={item.link}>
            <Link to={'/animal/' + item.link}>{item.label}</Link>
          </UI.ListItem> )
      }
    </UI.List>
  )
)

export default AnimalList