import styled from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/card-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {};

  const addCartItemHandler = (item) => {};

  const cartItems = (
    <ul className={styled["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styled.total}>
        <span>Разом</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styled.actions}>
        <button className={styled["button--alt"]} onClick={props.onHideCart}>
          Закрити
        </button>
        {hasItems && <button className={styled.button}>Замовити</button>}
      </div>
    </Modal>
  );
};
export default Cart;
