import React, { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import styles from "./SendOffer.module.css";

const SendOffer = () => {
  const [values, setValues] = useState({
    walletaddress: "",
    data: [
      {
        entryfee: "",
        apr: "",
        loanMinValue: "",
        loanMaxValue: "",
      },
      {
        entryfee: "",
        apr: "",
        loanMinValue: "",
        loanMaxValue: "",
      },
    ],
  });

  const inputs = [
    {
      title: "Fixed",
      info: [
        {
          label: "Entry fee",
          type: "text",
          name: "entryfee",
          placeholder: "John Doe",
        },
        {
          label: "APR",
          type: "text",
          name: "apr",
          placeholder: "John Doe",
        },
        {
          label: "Loan Min value",
          type: "text",
          name: "loanMinValue",
          placeholder: "John Doe",
        },
        {
          label: "Loan Max value",
          type: "text",
          name: "loanMaxValue",
          placeholder: "John Doe",
        },
      ],
    },
    {
      title: "Flexible",
      info: [
        {
          label: "Entry fee",
          type: "text",
          name: "entryfee",
          placeholder: "John Doe",
        },
        {
          label: "APR",
          type: "text",
          name: "apr",
          placeholder: "John Doe",
        },
        {
          label: "Loan Min value",
          type: "text",
          name: "loanMinValue",
          placeholder: "John Doe",
        },
        {
          label: "Loan Max value",
          type: "text",
          name: "loanMaxValue",
          placeholder: "John Doe",
        },
      ],
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className={`wrapper ${styles.estimate}`}>
      <form action="#">
        {" "}
        <Input
          label="Wallet Address"
          type="text"
          name="walletaddress"
          placeholder="John Doe"
          value={values["alletaddress"]}
          onChange={onChange}
        />
        {inputs.map((items, i) => (
          <div className={styles.dataWrapper} key={i}>
            <h2 className={`${styles.title} title`}>{items.title} </h2>
            {items.info.map((input, i) => (
              <Input
                {...input}
                key={i}
                value={values.data[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
        ))}
      </form>
      <div className={styles.buttonContainer}>
        <Button>Send Offer</Button>
      </div>
    </section>
  );
};

export default SendOffer;
