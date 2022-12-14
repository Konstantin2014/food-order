import { useContext } from "react";
import styled from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/card-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${props.price}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styled.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styled.description}>{props.description}</div>
        <div className={styled.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
