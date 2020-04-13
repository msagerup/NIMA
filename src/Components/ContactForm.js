import React, { useState } from 'react';

import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const DrawerForm = () => {
  const [state, setState] = useState({ visible: false })

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

      <Button onClick={showDrawer}>
        Contact Us
        </Button>
      <Drawer
        title="Send us a message"
        width={720}
        onClose={onClose}
        visible={state.visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'left',
            }}
          >
            <Button
              onClick={onClose}
              style={{ marginRight: 8 }}
            >
              Cancel
              </Button>
            <Button onClick={onClose} type="primary">
              Submit
              </Button>
          </div>
        }
      >
        <h2>Contact FORM placeholder</h2>
      </Drawer>
    </>

  )
}


export default DrawerForm;