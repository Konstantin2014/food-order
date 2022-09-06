import styled from "./Cart.module.css";

const Cart = () => {
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
    <div>
      {cartItems}
      <div className={styled.total}>
        <span>Загалом</span>
        <span>49.99</span>
      </div>
      <div>
        <button className={styled["button--alt"]}>Закрити</button>
        <button className={styled.button}>Замовити</button>
      </div>
    </div>
  );
};
export default Cart;
