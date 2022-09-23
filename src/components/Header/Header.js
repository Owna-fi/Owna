import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styles from "./Header.module.css";
import { useDataContext } from "../../context/context";

import BackOfficeButton from "./BackOfficeButton";

const Header = () => {
  const { backOffice } = useDataContext();
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  const navArray = [
    {
      navItem: "My Space",
      to: "myspace",
      navItems: [
        { name: "Profile", to: "/" },
        { name: "Appointments", to: "/whatareyouwillingtodo" },

        { name: "Estimate", to: "/estimate" },
      ],
    },
    {
      navItem: "Borrowing",
      to: "myspace",
      navItems: [
        { name: "Dashboard", to: "/dashboard" },
        { name: "P2P Offer", to: "/p2poffer" },
      ],
    },
    {
      navItem: "Lending",
      to: "myspace",
      navItems: [
        { name: "Marketplace", to: "/marketplace" },
        { name: "Stake", to: "/stake" },
        { name: "Claim", to: "/claim" },
      ],
    },
  ];

  const showDropDown = (index) => {
    setDropdown((prev) => !prev);
    setActive(index);
  };
  return (
    <section className={styles.header}>
      <a
        href="https://tokenly-git-feat-popup-get-started-d-roch.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className={styles.logo}
      >
        Owna
        <span className={styles.dot} />
      </a>
      <div className={`${styles.navWrapper} ${sidebar && styles.sidebar}`}>
        {navArray.map((item, i) => (
          <div
            className={styles.navItemsAndIcon}
            onClick={() => showDropDown(i)}
            key={i}
          >
            <div key={i} className={styles.navItems}>
              <p className={styles.navLink}>{item.navItem}</p>{" "}
              {dropdown && active === i && (
                <div
                  className={styles.dropdown}
                  onClick={() => setSidebar(false)}
                >
                  {item.navItems.map((el, i) => (
                    <Link
                      to={el.to}
                      className={`${styles.dropdownItem} ${styles.navLink}`}
                      key={i}
                    >
                      {el.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {dropdown && active === i ? (
              <FiChevronUp className={styles.arrow} />
            ) : (
              <FiChevronDown className={styles.arrow} />
            )}
          </div>
        ))}
        {sidebar && backOffice && <BackOfficeButton sidebar={sidebar} />}
      </div>
      <div className={styles.addressContainer}>
        {backOffice && <BackOfficeButton />}
        <p className={styles.address}>09wdbha6238</p>
        {sidebar ? (
          <MdClose
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        ) : (
          <GiHamburgerMenu
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
      </div>
    </section>
  );
};

export default Header;
