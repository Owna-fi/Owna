import React, { useState } from "react";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import styles from "./MakeOfferPopup.module.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const MakeOfferPopup = ({ setPopup }) => {
  const [open, setOpen] = useState(0);
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
    <>
      {" "}
      <section className={styles.popupWrapper}>
        <div className={`wrapper ${styles.popup}`}>
          {inputs.map((items, i) => (
            <div className={styles.dataWrapper}>
              <div className={styles.titleContainer}>
                <h2 className={`${styles.title} title`}>{items.title} </h2>
                {open === i ? (
                  <BsChevronUp
                    className={`${styles.icon} ${styles.title}`}
                    onClick={() => setOpen(i)}
                  />
                ) : (
                  <BsChevronDown
                    className={`${styles.icon} ${styles.title}`}
                    onClick={() => setOpen(i)}
                  />
                )}
              </div>
              {open === i &&
                items.info.map((input, i) => (
                  <form action="#">
                    <Input
                      {...input}
                      key={i}
                      value={values.data[input.name]}
                      onChange={onChange}
                    />
                  </form>
                ))}
            </div>
          ))}

          <div
            className={styles.buttonContainer}
            onClick={() => setPopup(false)}
          >
            <Button>Submit Offer</Button>
          </div>
        </div>
      </section>
      <div className={styles.modal} onClick={() => setPopup(false)}></div>
    </>
  );
};

export default MakeOfferPopup;
