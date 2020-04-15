import React, { useContext } from 'react'
// import Project from './Components/Project'
import ProjectRev from './Components/ProjectRev'
import About from '../About/About'
import { Row, Col } from 'antd';
import { Typography } from '@material-ui/core';
import { Container } from 'semantic-ui-react'
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import { AppContextData } from '../../Context/ContextData'


export default function Home() {
   const { toggleContactDrawer } = useContext(AppContextData)

   return (
      <>
         <section className='splashImage'>
            <Container>
               <Row justify='center'>
                  <Col lg={{ span: 24 }} className='splashTextMargin'>
                     <div className="spashTextPad">
                        <div className="headerText">NIMA Development</div>
                     </div>
                     <div className="subTextPad">
                        <Typography variant="body1" className="subText ">
                           Nima Development is a real estate development  firm specializing in contemporary residential construction.
                        </Typography>
                        <Typography variant="body2" className="subText deviderHalf">
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
                        <Typography variant="h5">Listings</Typography>
                     </div>
                  </Col>
                  <Col lg={8} xs={12} sm={12} >
                     <div className='threeRows'
                        style={{ fontSize: '50px', textAlign: 'center', cursor: 'pointer' }}
                        onClick={() => toggleContactDrawer(true, 'NIMA')}
                     >
                        <ContactMailIcon fontSize='inherit' />
                        <Typography variant="h5">Contact</Typography>
                     </div>
                  </Col>
                  <Col lg={8} xs={24} sm={12} >
                     <div className='threeRows' style={{ fontSize: '50px', textAlign: 'center' }}>
                        <GTranslateIcon fontSize='inherit' />
                        <Typography variant="h5">Change Language</Typography>
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
