function Item({ item, onIsPacked, onDeleteHandler }) {
  return (
    <li>
      <input
        type="checkbox"
        name="isPacked"
        value={item.isPacked}
        onChange={() => onIsPacked(item.id)}
      />
      <span className={item.isPacked ? "packed" : ""}>
        <span>{item.quantity} </span>
        {item.item}
      </span>
      <button onClick={() => onDeleteHandler(item.id)}>❌</button>
    </li>
  );
}

export default Item;
