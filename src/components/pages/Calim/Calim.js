import React from "react";
import CalimComponents from "./CalimComponents";
import usdtIcon from "../../../images/usdt.svg";
import onaIcon from "../../../images/ona.svg";
import styles from "./Calim.module.css";

const Claim = () => {
  const data = [
    {
      img: usdtIcon,
      currency: "USDT",
      amount: 0,
      amountUSD: 0,
      button: { text: " Unstake USDT" },
      day: 10,
    },
    {
      img: onaIcon,
      currency: "ONA",
      amount: 0,
      amountUSD: 0,
      button: { text: " Claim ONA" },
      day: 10,
    },
  ];
  return (
    <section className={styles.claim}>
      {data.map((el, i) => (
        <CalimComponents {...el} key={i} />
      ))}
    </section>
  );
};

export default Claim;
