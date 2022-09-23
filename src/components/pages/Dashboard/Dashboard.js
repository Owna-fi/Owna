import React from "react";
import { useState } from "react";
import Button from "../../Button/Button";
import RefundPopup from "./RefundPopup/RefundPopup";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [popup, setPopup] = useState(false);
  return (
    <section className={` ${styles.dashboard}`}>
      <h2 className={`title ${styles.title}`}>Borrowing Dashboard</h2>
      <p className={`text ${styles.text}`}>
        Your outstanding loan is{" "}
        <span className={styles.amount}> 5446 USDT</span>
      </p>
      <div className={styles.interest}>
        <div className={`${styles.dailyInteres} ${styles.borderRight}`}>
          <h3 className="title">Daily interest</h3>
          <p className={styles.interestAmount}>0.39 USDT</p>
        </div>
        <div className={`${styles.dailyInteres} `}>
          <h3 className="title">Cumulated interests</h3>
          <p className={styles.interestAmount}>0.39 USDT</p>
        </div>
      </div>{" "}
      <div onClick={() => setPopup(true)}>
        <Button>Refund</Button>
      </div>
      {popup && <RefundPopup setPopup={setPopup} />}
    </section>
  );
};

export default Dashboard;
