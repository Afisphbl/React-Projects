import '../styles/Footer.css'

function Footer({ time: { openingHour, closingHour, isOpen } }) {
  return (
    <footer>
      {isOpen ? (
        <Order closingHour={closingHour} />
      ) : (
        <p>
          We're happy to welcome you between {openingHour - 12}:00 AM and {closingHour - 12}
          :00 PM.
        </p>
      )}
    </footer>
  );
}

function Order({ closingHour }) {
  return (
    <div className="order">
      <p>
        We're currently open until {closingHour - 12}:00 PM. Come visit us or order
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Footer;
