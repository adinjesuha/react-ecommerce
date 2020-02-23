import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CollectionsOverview = ({collections}) => (
  <Wrapper>
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview 
        key={id} 
        {...otherCollectionProps}
      />
    ))}
  </Wrapper>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(
  mapStateToProps
)(CollectionsOverview)