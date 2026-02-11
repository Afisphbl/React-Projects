function Footer({ items }) {
  const itemsLength = items.length;

  if (itemsLength === 0) {
    return (
      <footer className="stats">
        <p>Start adding some items to your list 🚀</p>
      </footer>
    );
  }

  const itemPacked = items.filter((item) => item.isPacked).length;
  const percentage = (itemPacked / itemsLength) * 100;

  return (
    <footer className="stats">
      <p>
        {percentage === 100
          ? `You got everything! Ready to go ✈️`
          : `You have ${itemsLength} items on your list, and you already packed
        ${itemPacked} (${percentage}%)`}
      </p>
    </footer>
  );
}

export default Footer;
