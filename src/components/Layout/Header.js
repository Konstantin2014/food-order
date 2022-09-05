import React from "react";
import SushiImage from "../../assets/003 sushi.jpg";
import styled from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styled.header}>
        <h1>Японська кухня</h1>
        <button>Корзина</button>
      </header>
      <div className={styled["main-image"]}>
        <img src={SushiImage} alt="Суші" />
      </div>
    </>
  );
};
export default Header;
