import React from "react";
import borrower from "../../../images/borrower.png";
import styles from "./LendingDashboard.module.css";

const LendingDashboard = () => {
  const data = [
    { title: "Borrower ", text: "1e8e82 ", img: borrower },
    { title: "Category ", text: "10 Aug 11:08" },

    { title: "Loan start Date", text: "10 Aug 11:08" },

    { title: "Loan max date", text: "8 Flexible" },

    {
      title: "Remaining days ",
      text: "25 000 USDT ",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.dataWrapper}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.textContainer} ${
              index % 2 === 0 && styles.textContainerBorder
            }`}
          >
            <div>
              <div className={styles.titleAndIcon}>
                {item.img && (
                  <img src={item.img} alt="#" className={styles.icon} />
                )}
                <div>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};
export default LendingDashboard;
