import React from "react";

import Button from "../../Button/Button";

import styles from "./LetsConnect.module.css";

const LetsConnect = () => {
  return (
    <section className={`wrapper ${styles.letsConnectWrapper}`}>
      <h1 className="title">Let’s Connect</h1>
      <p className="text">Book below if you need assitance</p>
      <div className={styles.letsConnect}>
       <!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/ownafinance/30min" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
      </div>

      <div className={styles.buttonContainer}>
        <Button>Book</Button>
      </div>
    </section>
  );
};

export default LetsConnect;
