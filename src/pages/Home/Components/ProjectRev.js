import React from 'react'
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from '@material-ui/core';
import { Container } from 'semantic-ui-react'

import Images from './ImageGallery'


export default function ProjectRev() {
   return (
      <Container>
         <Row className='devider'>
         </Row>
         <Row justify="space-around" align="top">
            <Col span={10}>
               <Images />
            </Col>
            <Col span={12} offset={2}>
               <Typography
                  variant="h4"
                  className='devider'
               >
                  Weston, Boston
                    </Typography>
               <Typography variant='body2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit ratione consequatur at voluptate dolore id corporis repudiandae velit minima qui perferendis tempore amet quis vitae maxime, libero ad aliquam, reiciendis illo eius possimus distinctio. Iusto natus maiores laborum vel nobis accusantium dolor odit, totam soluta consequatur ex beatae quas quaerat libero placeat ducimus laudantium omnis hic recusandae nemo ut?``
                     </Typography>
               <Row className='devider'>
                  <Col span={12}>
                     <Button type="primary">More info about property</Button>
                  </Col>
                  <Col span={12}>
                     <Button type="dashed">Contact us about property</Button>
                  </Col>
               </Row>
            </Col>
         </Row>
      </Container>
   )
}
