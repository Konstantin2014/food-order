import styled from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={styled.button} onClick={props.onClick}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styled.badge}>2</span>
    </button>
  );
};
export default HeaderCartButton;
