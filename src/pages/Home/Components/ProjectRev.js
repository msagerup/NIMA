import React from 'react'
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from '@material-ui/core';
import { Container } from 'semantic-ui-react'
import ListingDetails from '../../../Components/ListingDetails'
import Images from './ImageGallery'


export default function ProjectRev() {
   return (
      <Container>
         <section>
               <Row className='devider'>
                  <Col lg={12} xs={24} sm={24} ><Typography variant='h4'>New Listing</Typography></Col>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit ratione consequatur at voluptate dolore id corporis repudiandae velit minima qui perferendis tempore amet quis vitae maxime, libero ad aliquam, reiciendis illo eius possimus distinctio. Iusto natus maiores laborum vel nobis accusantium dolor odit, totam soluta consequatur ex beatae quas quaerat libero placeat ducimus laudantium omnis hic recusandae nemo ut?``
               </Typography>
               <div className="deviderHalf"></div>
            </Col>
            <Col lg={{span: 14, order: 3, push:9}} xs={{span: 24, order: 3}}>
               <ListingDetails />
            </Col>
         </Row>
         <Row className='devider'></Row>
      </Container>
   )
}
