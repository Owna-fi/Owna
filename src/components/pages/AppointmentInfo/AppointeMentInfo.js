import React, { useState } from "react";

import Input from "../../Input/Input";

import UploadingPhoto from "./UploadingPhoto/UploadingPhoto";
import CheckBox from "../../Checkbox/CheckBox";
import Button from "../../Button/Button";
import styles from "./AppointmentInfo.module.css";

const AppointeMentInfo = () => {
  const [rightAsset, setRightAsset] = useState(false);
  const [notFake, setNotFake] = useState(false);
  const [values, setValues] = useState({
    category: "",
    origin: "",
    size: "",
    stateoftheassest: "",
  });

  const inputs = [
    {
      label: "Category",
      type: "text",
      name: "category",
      placeholder: "John Doe",
    },
    {
      label: "Origin",
      type: "text",
      name: "origin",
      placeholder: "John Doe",
    },
    {
      label: "Size",
      type: "text",
      name: "size",

      placeholder: "John Doe",
    },
    {
      label: "State of the Asset",
      type: "text",
      name: "stateoftheassest",
      placeholder: "john.doe@awsamplify.com",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <section className={`wrapper ${styles.wrapper}`}>
      <h1 className="title">
        What asset are willing to bring to your appointment?
      </h1>
      {inputs.map((input, i) => (
        <Input
          {...input}
          key={i}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <UploadingPhoto />
      <div className={styles.checkBoxContainer}>
        {" "}
        <form action="#">
          {" "}
          <CheckBox
            checked={rightAsset}
            setChecked={setRightAsset}
            label="I certify that all the photos are taken by me and are showing the asset brought to the appointment."
          />{" "}
          <CheckBox
            checked={notFake}
            setChecked={setNotFake}
            label="I certify the asset is not Fake and fully understand that Owna’s partners will keep it if fake."
          />
        </form>
      </div>
      <Button to="/connect">Appointment</Button>
    </section>
  );
};

export default AppointeMentInfo;
