import React, { useState } from 'react';

import { Drawer,  Button, Col, Row, List,  Divider } from 'antd';
import placeholder from '../images/placeholder.jpg'





const ListingDetails = () => {
  const [state, setState] = useState({ visible: false })


  const data = [
   '1005 Rooms',
   '200000000 Dollaz',
   '500 Bathrooms',
   'Huge ass garden',
   'Non-Leaky Roof',
 ];
 

  const showDrawer = () => {
    setState({
      visible: true
    });
  };

  const onClose = () => {
    setState({
      visible: false
    });
  };

  return (

    <>

      <Button type="primary" onClick={showDrawer}>
      More info about property
        </Button>
      <Drawer
        width={620}
        placement='left'
        onClose={onClose}
        visible={state.visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            
            <Button onClick={onClose} type="primary">
              Close
              </Button>
          </div>
        }
      >
    <Row justify="center">
      <Col span={20}>
      <List
      size="small"
      header={<img src={placeholder}/>}
      // footer={<div>Footer</div>}
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
      </Col>
     
    </Row>

       
      </Drawer>
    </>

  )
}


export default ListingDetails;