import React, { useState } from "react";
import MyRange from "../../../Range/Range";
import Button from "../../../Button/Button";
import usdtIcon from "../../../../images/usdt.svg";
// import usdtIcon from "../../../images/usdt.svg";
// import onaIcon from "../../../images/ona.svg";
import styles from "./Popup.module.css";

const Popup = ({ setPopup }) => {
  const [borrowAmount, setBorrowAmount] = useState([5000]);
  const [borrow, setBorrow] = useState("");
  return (
    <>
      <section className={styles.popupWrapper}>
        <div className={`wrapper ${styles.popup}`}>
          <h2 className={styles.title}>Selected amount</h2>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Select Amount</legend>
            <input
              type="text"
              className={styles.input}
              value={borrow}
              onChange={(e) => setBorrow(e.target.value)}
            />
            <div className={styles.buttonImage}>
              <button className={styles.maxButton}>max</button>
              <img src={usdtIcon} alt="#" className={styles.maxImage} />
            </div>
          </fieldset>
          <div className={styles.range}>
            <div className={styles.minMax}>
              <p className={styles.amount}>
                5000 <span className={styles.text}>min</span>
              </p>{" "}
              <p className={styles.amount}>
                {borrowAmount} <span className={styles.text}>max</span>
              </p>
            </div>
            <MyRange value={borrowAmount} setValue={setBorrowAmount} />
          </div>
          <h2 className={styles.title}>Daily interest: 7,29 USDT</h2>
          <div
            className={styles.buttonContainer}
            onClick={() => setPopup(false)}
          >
            <Button>Borrow</Button>
          </div>
        </div>
      </section>

      <div className={styles.modal} onClick={() => setPopup(false)}></div>
    </>
  );
};

export default Popup;
