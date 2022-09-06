import styled from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Ролл "Наомі"',
    description: "Сир Філадельфія, куряче філе, масаго, томат, огірок, кунжут",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Спайс у лососі",
    description: "Рис, лосось, соус спайс",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Суші з вугрем",
    description: "Вугорь копчений, соус унагі, кунжут",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Салат "Покє с лососем"',
    description:
      "Рис, лосось, огірок, чука, норі, стружка тунца, соус горіховий",
    price: 7.99,
  },
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styled.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default MealList;
