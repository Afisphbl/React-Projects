import { useState } from "react";
import "../Styles/UserInput.css";

function UserInput({ onAddInvestment }) {
  const [investment, setInvestment] = useState({
    current__saving: 10000,
    yearly__saving: 1200,
    interest: 7,
    duration: 10,
  });

  function currentSavingChangeHandler(e) {
    const { value } = e.target;
    const current__saving__number = Number(value);
    if (!current__saving__number) return;

    setInvestment((prevInv) => ({
      ...prevInv,
      current__saving: current__saving__number,
    }));
  }

  function yearlySavingChangeHandler(e) {
    const { value } = e.target;
    const yearly__saving__number = Number(value);
    if (!yearly__saving__number) return;

    setInvestment((prevInv) => ({
      ...prevInv,
      yearly__saving: yearly__saving__number,
    }));
  }

  function interestChangeHandler(e) {
    const { value } = e.target;
    const interest = Number(value);
    if (!interest || interest > 100) return;

    setInvestment((prevInv) => ({
      ...prevInv,
      interest,
    }));
  }

  function durationChangeHandler(e) {
    const { value } = e.target;
    const duration = Math.floor(+value);
    if (!duration) return;

    setInvestment((prevInv) => ({
      ...prevInv,
      duration,
    }));
  }

  function calculateHandler(e) {
    e.preventDefault();
    const { duration, interest, current__saving, yearly__saving } = investment;
    let current__total = current__saving,
      yearly__inter,
      total__inter = 0,
      invested;
    const calculated__investment = [];
    for (let i = 1; i <= duration; i++) {
      yearly__inter = (current__total * interest) / 100;
      total__inter += yearly__inter;
      invested = current__saving + yearly__saving * i;
      current__total = invested + total__inter;
      calculated__investment.push({
        year: i,
        current__total: current__total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
        yearly__inter: yearly__inter.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
        total__inter: total__inter.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
        invested: invested.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      });
    }
    onAddInvestment(calculated__investment);
  }

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <div>
          <label>Current Savings ($)</label>
          <input
            type="number"
            value={investment.current__saving}
            onChange={currentSavingChangeHandler}
          />
        </div>
        <div>
          <label>Yearly Savings ($)</label>
          <input
            type="number"
            value={investment.yearly__saving}
            onChange={yearlySavingChangeHandler}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Interest (%, per year)</label>
          <input
            type="number"
            value={investment.interest}
            onChange={interestChangeHandler}
          />
        </div>
        <div>
          <label>Investment Duration (years)</label>
          <input
            type="number"
            value={investment.duration}
            onChange={durationChangeHandler}
          />
        </div>
      </div>
      <div className="actions">
        <button className="button buttonAlt" type="reset">
          Reset
        </button>
        <button className="button" type="submit">
          Calculate
        </button>
      </div>
    </form>
  );
}

export default UserInput;
