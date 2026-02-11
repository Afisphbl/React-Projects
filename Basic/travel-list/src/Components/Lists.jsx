import { useState } from "react";
import Item from "./Item";

function Lists({ items, onIsPacked, onDeleteHandler, onClearHandler }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedBy;

  if (sortBy === "input") sortedBy = items;
  if (sortBy === "description")
    sortedBy = items.slice().sort((a, b) => a.item.localeCompare(b.item));
  if (sortBy === "packed")
    sortedBy = items
      .slice()
      .sort((a, b) => Number(b.isPacked) - Number(a.isPacked));

  return (
    <main className="list">
      <ul>
        {sortedBy.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onIsPacked={onIsPacked}
              onDeleteHandler={onDeleteHandler}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select name="sortBy" onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>

        <button onClick={onClearHandler}>clear lists</button>
      </div>
    </main>
  );
}

export default Lists;
