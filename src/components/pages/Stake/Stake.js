import React from "react";
import styles from "./Stake.module.css";
import usdtIcon from "../../../images/usdt.svg";
import onaIcon from "../../../images/ona.svg";
import StakeComponents from "./StakeComponents/StakeComponents";
import { useState } from "react";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";

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
      stake: false,
      amount: 0,
      amountUSD: 0,
      button: { text: " Unstake USDT" },
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
      currency: "USDT",
      claim: true,
      amount: 0,
      amountUSD: 0,
      button: { text: " Claim USDT" },
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
      <div className={styles.usdtContainer}>
        <div className={styles.usdt}>
          <img src={usdtIcon} alt="#" className={styles.image} />
          <p className={styles.currency}>USDT</p>
        </div>
        <div className={styles.appromaxContainer}>
          <p className={styles.appromax}>Staking APR</p>
          <span className={styles.percentage}>6.72%</span>
        </div>
        <div className={styles.appromaxContainer}>
          <p className={styles.appromax}>Max slashing</p>
          <span className={styles.percentage}>30.00%</span>
        </div>{" "}
        <div className={styles.appromaxContainer}>
          <p className={styles.appromax}>Wallet Balance</p>
          <span className={styles.percentage}>0</span>
        </div>
        <div className={styles.appromaxContainer}>
          {" "}
          <Button>Stake</Button>
        </div>
      </div>
      <div className={styles.componentswrapper}>
        {data.map((el, i) => (
          <StakeComponents {...el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Stake;
