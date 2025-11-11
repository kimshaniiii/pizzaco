import React from "react";
import "./App.css";

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return (
    <footer className="footer">
        <p>
          {isOpen ? (
            <>
              order up twin! <br />
              last order at 10:00 PM
            </>
          ) : (
            <>
              my bad twin we closed! <br />
              we open daily from 10:00 AM to 10:00 PM
            </>
          )} <br></br>
        <button className="order">order up</button>
        </p>
    </footer>
  );
}

export default Footer;