import React from "react";
import styles from "./Stake.module.css";
import usdtIcon from "../../../images/usdt.svg";
import onaIcon from "../../../images/ona.svg";
import StakeComponents from "./StakeComponents/StakeComponents";
import { useState } from "react";
import Heading from "../../Heading/Heading";

const Stake = () => {
  const [usdModal, setUsdModal] = useState();
  const [onadModal, setOnaModal] = useState();
  const data = [
    {
      percentage: "11.00%",
      getButton: {
        text: "Get USDT Token",
      },
      img: usdtIcon,
      currency: "USDT",
      amount: 0,
      amountUSD: 0,
      button: { text: " Stake USDT" },
      day: 10,
      modal: usdModal,
      setModal: setUsdModal,
    },
    {
      percentage: "11.00%",
      getButton: {
        text: "Get USDT ONA",
      },
      img: onaIcon,
      currency: "ONA",
      amount: 0,
      amountUSD: 0,
      button: { text: " Stake ONA" },
      day: 10,
      modal: onadModal,
      setModal: setOnaModal,
    },
  ];
  return (
    <section className={styles.stake}>
      <Heading
        title="Stake"
        text="Deposit liquidity in Owna's Pool to earn interests"
      />
      <div className={styles.componentswrapper}>
        {data.map((el, i) => (
          <StakeComponents {...el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Stake;
