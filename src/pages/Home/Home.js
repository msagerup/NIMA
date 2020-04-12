import React from 'react'

import Project from './Components/Project'
import ProjectRev from './Components/ProjectRev'



import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from '@material-ui/core';
import { Container } from 'semantic-ui-react'

export default function Home() {
   return (
      <>
         <section className='splashImage'>
            <Container>
               <section className="splashText">
                  <Typography variant="h2">Dream homes</Typography>
                  <Typography variant="body2" className="subText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa repudiandae quam officiis distinctio? Nemo necessitatibus veritatis perspiciatis ab incidunt molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos iste mollitia maiores doloribus, ut alias incidunt culpa! Corporis, nisi accusamus! Autem similique ducimus maiores repellat animi! Iste aliquid similique a accusantium, excepturi repellat nostrum nemo deleniti nulla soluta numquam, accusamus repudiandae. Consectetur enim itaque fuga aperiam ad doloremque.</Typography>
                  <Button> Learn More</Button>
               </section>
            </Container>
         </section>
         <section>
            <Container>
               <Row className='devider'>
                  <Col span={12}><Typography variant='h3'>Projects</Typography></Col>
               </Row>
               <Row>
                  <Col span={24}>
                     <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam enim nam tenetur voluptatem rerum ab accusantium id voluptatibus itaque animi suscipit, saepe dolorem velit eum quas repellendus, beatae est expedita! A facilis, itaque deleniti eveniet maiores numquam voluptatum quos corrupti nesciunt impedit. Nostrum, aliquam aperiam velit facilis eius accusamus?</Typography>
                  </Col>
               </Row>
            </Container>
         </section>
         <section>
            <Project />
         </section>
         <section>
            <ProjectRev />
         </section>
      </>
   )
}
