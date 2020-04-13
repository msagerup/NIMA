import React from 'react'
import { Avatar } from 'antd';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Typography } from '@material-ui/core';
import { Container } from 'semantic-ui-react'

import blueprint from '../../images/blueprint.jpg'

export default function About() {
   return (
      <Container>
         <Row className='devider'>
            <Col span={12}><Typography variant='h3'>About Us</Typography></Col>
         </Row>
         <Row justify="space-around" align="middle">
            <Col span={12}>
               <Typography variant='body1'>
                  The Nima Developent team consists of designers, builders and engineers with the skillset and common goal to build smart, energy efficient and healthy houses. We aim to integrate the latest in smart home and energy conservation technology into sustainable residential design.
                  </Typography>
               <Row className='deviderHalf'>
                  <Typography variant='body1'>
                     We work on projects on the east coast and Puerto Rico, where our focus is energy efficient high-end residential construction with off-grid optionality, with incorporation of cisterns and large scale solar PV array systems.
               </Typography>
               </Row>
            </Col>
            <Col span={10} offset={2}>
               <img src={blueprint} className='imageHolder' alt="Blue print image" />
            </Col>
         </Row>
         <Row className='deviderHalf'></Row>
         <Row>
            <Typography variant="h4">Principals</Typography>
         </Row>
         <Row justify="center" align="middle">
            <Col span={12} className="principal" >
               <Typography variant="h6">
                  <Avatar size="small" shape="square" icon={<UserOutlined />} style={{ marginRight: '15px' }} />
                  Camilla Sagerup
               </Typography>
               <Row className='deviderHalf'></Row>
            <Button size="small" type="primary">Contact Camilla Sagerup</Button>

            </Col>
            <Col span={12} className="principal">
               <Typography variant="h6">
                  <Avatar size="small" shape="square" icon={<UserOutlined />} style={{ marginRight: '15px' }} />
                  Joshua Levy
            </Typography>
            <Row className='deviderHalf'></Row>
            <Button size="small" type="primary">Contact Joshua Levy</Button>

            </Col>
         </Row>
         <Row className='devider'></Row>
      </Container>
   )
}
