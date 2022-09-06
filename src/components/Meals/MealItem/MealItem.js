import styled from "./MealItem.module.css";

const MealItem = (props) => {
  const formattedPrice = `$${props.price}`;
  console.log(props);
  return (
    <li className={styled.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styled.description}>{props.description}</div>
        <div className={styled.price}>{formattedPrice}</div>
      </div>
      <div></div>
    </li>
  );
};
export default MealItem;
