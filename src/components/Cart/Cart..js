import styled from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styled["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Суші з вугрем",
          amount: 2,
          price: 4.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styled.total}>
        <span>Загалом</span>
        <span>49.99</span>
      </div>
      <div className={styled.actions}>
        <button className={styled["button--alt"]} onClick={props.onHideCart}>
          Закрити
        </button>
        <button className={styled.button}>Замовити</button>
      </div>
    </Modal>
  );
};
export default Cart;
