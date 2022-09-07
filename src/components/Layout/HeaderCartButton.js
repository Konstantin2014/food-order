import styled from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import CartContext from "../../store/card-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext); // теперь HeaderCartButton будет переоцениваться react при ихменении CartContextю
  // И контекст будет изменяться, когда мы будем его изменять в CartContextProviderю Таким образом мы устанавливаем соединение между контекстом и компонентами

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={styled.button} onClick={props.onClick}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styled.badge}>{cartItemsNumber}</span>
    </button>
  );
};
export default HeaderCartButton;
