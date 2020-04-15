import React, { useContext } from 'react'
import { Row, Col, Button } from 'antd';
import { Typography } from '@material-ui/core';
import { Container } from 'semantic-ui-react'
import ListingDetails from '../../../Components/ListingDetails'
import Images from './ImageGallery'

import { AppContextData } from '../../../Context/ContextData'


export default function ProjectRev() {
   const {toggleListingDrawer} = useContext(AppContextData)
   return (
      <Container>
         <section>
            <Row className='devider'>
               <Col lg={12} xs={24} sm={24} ><Typography variant='h4'>Current Projects</Typography></Col>
            </Row>

         </section>
         <Row>
         </Row>
         <Row justify="space-around" align="top">
            <Col lg={{ span: 10, order: 1 }} xs={{ span: 24, order: 2 }}>
               <Images />
            </Col>
            <Col lg={{ span: 12, order: 2, offset: 2 }} xs={{ span: 24, order: 1 }} >
               <Typography
                  variant="h5"
                  className='devider'
               >
                  Dorado Beach, Puerto Rico
               </Typography>
               <Typography variant='body2'>
                  This property is located in exclusive <a href="https://www.doradobeach.com/" target="_blank"> Dorado Beach </a>, a Ritz Carlton Reserve in Puerto Rico.  It is an unique property that was built  from precast concrete forms.
               </Typography>
               <Typography variant='body2'>
                  This estate has been completely gutted and re-imagined with major structural alternations and additions. The end product will result in a spacious 7 bedroom Estate with high end, energy efficient materials and systems in a prime location, with a large private lot with ocean views.
               </Typography>
               <div className="deviderHalf"></div>
               <div className="listDetailButton">
                  <Button onClick={() => toggleListingDrawer(true)}>More Info</Button>
               </div>
            </Col>
            <Col lg={{ span: 14, order: 3, push: 9 }} xs={{ span: 24, order: 3 }}>
               <ListingDetails />
            </Col>
         </Row>
         <Row className='devider'></Row>
         <div className="listDetailButtonMobile">
            <Button onClick={() => toggleListingDrawer(true)}>More Info</Button>
         </div>
      </Container>
   )
}
