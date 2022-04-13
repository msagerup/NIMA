import React from "react";
import { Container } from "semantic-ui-react";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div
          style={{
            textAlign: "right",
            color: "#ffffff",
            fontSize: "10px",
          }}
        >
          Design and code by : Nordic UX
        </div>
      </Container>
    </footer>
  );
}
