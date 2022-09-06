import CartContext from "./card-context";
// цель компонента управление данными контекста корзины и предаставляение этого контекста
// всем компонентакм, которые имеют к нему доступ
const CartContextProvider = (props) => {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
