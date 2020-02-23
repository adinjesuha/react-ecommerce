import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/menu-item.component'

const DirectoryElement = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Directory = ({sections}) => (
  <DirectoryElement>
    {sections.map(({id, ...otherSectionProps}) => (
      <MenuItem 
        key={id} 
        {...otherSectionProps}
      />
    ))}
  </DirectoryElement>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(
  mapStateToProps
)(Directory)