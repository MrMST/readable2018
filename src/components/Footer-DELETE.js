import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_CAT1}>
      CAT1
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_CAT2}>
      CAT2
    </FilterLink>
  </p>
)

export default Footer