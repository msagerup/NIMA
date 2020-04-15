import React, { useContext } from 'react';
import { Drawer, Button, Col, Row, List } from 'antd';
import { Typography } from '@material-ui/core';

import placeholder from '../images/placeholder.jpg'
import { AppContextData } from '../Context/ContextData'

const ListingDetails = () => {
  const { toggleListingDrawer, listingDrawerOpen } = useContext(AppContextData)

  // Calculate window width for drawer menu size.
  let width = window.innerWidth
  let drawerWidth;
  if (width <= 600) {
    drawerWidth = 340
  } else {
    drawerWidth = 720
  }

  const data = [
    '1005 Rooms',
    '200000000 Dollaz',
    '500 Bathrooms',
    'Huge ass garden',
    'Non-Leaky Roof',
  ];

  const onClose = () => {
    toggleListingDrawer(false)
  };

  return (

    <>
      <Drawer
        title="Dorado Beach, Puerto Rico"
        width={drawerWidth}
        placement='left'
        onClose={onClose}
        visible={listingDrawerOpen}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'center',
            }}
          >

            <div onClick={onClose} type="primary" style={{padding:'10px', cursor:'pointer', backgroundColor: '#3d3d3d', color:"white"}}>
              Close
              </div>
          </div>
        }
      >
        <Row justify="center" gutter={[10, 10]}>
          <Col lg={{ span: 20 }} xs={{ span: 24 }}>
            <List
              size="small"
              header={<img src={placeholder} alt='placeholder' className="imageHolder" />}
              // footer={<div>Footer</div>}
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
          <Col lg={{ span: 20 }} xs={{ span: 24 }}>
            <Typography variant='body2'>
              This property is located in exclusive <a href="https://www.doradobeach.com/" target="_blank"> Dorado Beach </a>, a Ritz Carlton Reserve in Puerto Rico.  It is an unique property that was built  from precast concrete forms.
               </Typography>
            <Typography variant='body2'>
              This estate has been completely gutted and re-imagined with major structural alternations and additions. The end product will result in a spacious 7 bedroom Estate with high end, energy efficient materials and systems in a prime location, with a large private lot with ocean views.
               </Typography>
          </Col>
        </Row>
      </Drawer>
    </>
  )
}


export default ListingDetails;