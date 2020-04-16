import React, { useContext } from 'react'
// import Project from './Components/Project'
import ProjectRev from './Components/ProjectRev'
import About from '../About/About'
import { Row, Col } from 'antd';
import { Typography } from '@material-ui/core';
import { Container } from 'semantic-ui-react'
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import { AppContextData } from '../../Context/ContextData'
import Logo from '../../images/logo_svg.svg'

import grey from '@material-ui/core/colors/red';

export default function Home() {
   const { toggleContactDrawer } = useContext(AppContextData)
   const primary = grey[500]; // #F44336

   return (
      <>
         <section className='splashImage'>
            <Container>
               <Row justify='center'>
                  <Col lg={{ span: 24 }} className='splashTextMargin'>
                     <div className="spashTextPad">
                        <div className="logoHolder" style={{ textAlign: 'center' }}>
                           <img src={Logo} alt="Nima Logo" className="logo" />
                        </div>
                     </div>
                     <div className="subTextPad">
                        <Typography variant="body1" className="subText ">
                           Nima Development is a real estate development  firm specializing in contemporary residential construction.
                        </Typography>
                        <Typography variant="body1" className="subText deviderHalf">
                           We design and build homes with a focus on energy efficient building envelopes, a healthy indoor environment, operational energy conservation with integration of solar PV systems where possible.
                         </Typography>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className="sectionPaddingSplit">
            <Container>
               <Row gutter={[10, 10]}>
                  <Col lg={8} xs={12} sm={12} >
                     <div className='threeRows' style={{ fontSize: '50px', textAlign: 'center', cursor: 'pointer' }}>
                        <ImportContactsOutlinedIcon fontSize='inherit' />
                        <div className="textColorWhite" style={{ color: 'white' }}>
                           <Typography color='inherit' variant="h5">Listings</Typography>
                        </div>
                     </div>
                  </Col>
                  <Col lg={8} xs={12} sm={12} >
                     <div className='threeRows' style={{ fontSize: '50px', textAlign: 'center' }}>
                        <HomeWorkIcon fontSize='inherit' />
                        <div className="textColorWhite" style={{ color: 'white' }}>
                           <Typography color='inherit' variant="h5">Projects</Typography>
                        </div>
                     </div>
                  </Col>
                  <Col lg={8} xs={24} sm={12} >
                     <div className='threeRows'
                        style={{ fontSize: '50px', textAlign: 'center', cursor: 'pointer' }}
                        onClick={() => toggleContactDrawer(true, 'NIMA')}
                     >
                        <ContactMailIcon fontSize='inherit' />
                        <div className="textColorWhite" style={{ color: 'white' }}>
                           <Typography color='inherit' variant="h5">Contact</Typography>
                        </div>
                     </div>





                  </Col>
               </Row>
            </Container>
         </section>
         {/* <section>
            <Project />
         </section> */}
         <section className="sectionPaddingOne">
            <ProjectRev />
         </section>
         <section className='sectionPaddingTwo'>
            <About />
         </section>
      </>
   )
}
