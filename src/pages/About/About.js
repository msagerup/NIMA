import React, { useContext } from 'react'
import { Row, Col } from 'antd';
import { Typography } from '@material-ui/core';
import { Container } from 'semantic-ui-react'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import blueprint from '../../images/blueprint.jpg'

import { AppContextData } from '../../Context/ContextData'


export default function About() {
   const { toggleContactDrawer } = useContext(AppContextData)
   return (
      <Container>
         <Row className='devider'>
            <Col lg={{ span: 24 }} xs={{ span: 24 }}><Typography variant='h4'>About Us</Typography></Col>
         </Row>
         <Row justify="space-around" align="middle">
            <Col lg={{ span: 10 }} xs={{ span: 24 }}>
               <Typography variant='body1'>
                  The Nima Developent team consists of designers, builders and engineers with the skillset and common goal to build smart, energy efficient and healthy houses. We aim to integrate the latest in smart home and energy conservation technology into sustainable residential design.
                  </Typography>
               <Row className='deviderHalf'>
                  <Typography variant='body1'>
                     We work on projects on the east coast and Puerto Rico, where our focus is energy efficient high-end residential construction with off-grid optionality, with incorporation of cisterns and large scale solar PV array systems.
               </Typography>
               </Row>
            </Col>
            <Col lg={{ span: 12, offset: 2 }} xs={{ span: 24 }}>
               <img src={blueprint} className='imageHolder' alt="Blue print " />
            </Col>
         </Row>
         <Row className='deviderHalf'></Row>
         <section className="sectionPaddingSplit lightGreyBackground">

            <Row gutter={[10, 10]}>
               <Col lg={8} xs={24} sm={12} >
                  <div className='threeRowsMobile lightGreyContact' style={{ fontSize: '70px', textAlign: 'center' }}>
                     <div className="textColorWhite ">
                        <Typography color='inherit' variant="h5">Contact Principals</Typography>
                     </div>
                  </div>
               </Col>
               <Col lg={8} xs={12} sm={12} >
                  <div
                     className='threeRows threeRowsContactMobile lightGreyContact'
                     style={{ fontSize: '50px', textAlign: 'center', cursor: 'pointer' }}
                     onClick={() => toggleContactDrawer(true, 'Camilla')}
                  >
                     <ContactMailIcon fontSize='inherit' />
                     <div className="textColorWhite">
                        <Typography color='inherit' variant="h5">Camilla Sagerup</Typography>
                     </div>
                  </div>
               </Col>
               <Col lg={8} xs={12} sm={12} >
                  <div
                     className='threeRows threeRowsContactMobile lightGreyContact'
                     style={{ fontSize: '50px', textAlign: 'center', cursor: 'pointer' }}
                     onClick={() => toggleContactDrawer(true, 'Joshua')}
                  >
                     <ContactMailIcon fontSize='inherit' />
                     <div className="textColorWhite">
                        <Typography color='inherit' variant="h5">Joshua Levy</Typography>
                     </div>
                  </div>
               </Col>
            </Row>

         </section>

      </Container>
   )
}
