import React from "react";
import { Row, Col } from "antd";

const Listings = () => {
  // const { toggleListingDrawer, listingDrawerOpen } = useContext(AppContextData)

  return (
    <div style={{ padding: "50px 0" }}>
      <Row>
        <Col>
          <h5>Currently no listings</h5>
        </Col>
      </Row>
    </div>
  );
};

export default Listings;
