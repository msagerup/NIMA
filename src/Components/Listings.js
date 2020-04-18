import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import placeholder from '../images/placeholder.jpg'
import { Row, Col } from 'antd';
import { Container } from 'semantic-ui-react'

import { AppContextData } from '../Context/ContextData'

const Listings = () => {
  // const { toggleListingDrawer, listingDrawerOpen } = useContext(AppContextData)

 
  return (
    <div style={{padding: '50px 0'}}>
        <Row>
          <Col>
          <h5>Currently no listings</h5>
          </Col>
        </Row>
    </div>
  )
}


export default Listings;