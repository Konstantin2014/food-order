import styled from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={styled.form}>
      <Input
        label="Кількість"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Додати</button>
    </form>
  );
};
export default MealItemForm;
