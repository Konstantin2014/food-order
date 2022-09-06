import React from "react";
import SushiImage from "../../assets/sushi.jpg";
import styled from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styled.header}>
        <h1>Японська кухня</h1>
        <HeaderCartButton />
      </header>
      <div className={styled["main-image"]}>
        <img src={SushiImage} alt="Суші" />
      </div>
    </>
  );
};
export default Header;
