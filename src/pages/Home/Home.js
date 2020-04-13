import React from 'react'

import Project from './Components/Project'
import ProjectRev from './Components/ProjectRev'
import About from '../About/About'



import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from '@material-ui/core';
import { Container } from 'semantic-ui-react'
import ContactForm from '../../Components/ContactForm'

export default function Home() {
   return (
      <>
         <section className='splashImage'>
            <Container>
               <section className="splashText">
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
                  <div className="deviderHalf">
                     <ContactForm />
                  </div>
               </section>
            </Container>
         </section>
         <section>
            <Container>
               <Row className='devider'>
                  <Col span={12}><Typography variant='h3'>Listings</Typography></Col>
               </Row>
               <Row>
                  <Col span={24}>
                     <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam enim nam tenetur voluptatem rerum ab accusantium id voluptatibus itaque animi suscipit, saepe dolorem velit eum quas repellendus, beatae est expedita! A facilis, itaque deleniti eveniet maiores numquam voluptatum quos corrupti nesciunt impedit. Nostrum, aliquam aperiam velit facilis eius accusamus?</Typography>
                  </Col>
               </Row>
            </Container>
         </section>
         {/* <section>
            <Project />
         </section> */}
         <section>
            <ProjectRev />
         </section>
         <section>
            <About />
         </section>
      </>
   )
}
