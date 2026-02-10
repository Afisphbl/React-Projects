import "../../Styles/ExpenseFilter.css";

function ExpenseFilter({ selected, setFilteredYear }) {
  function filterHandler(e) {
    setFilteredYear(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">Filter by year</label>

        <select
          name="filter__date"
          id="filter"
          value={selected}
          onChange={filterHandler}
        >
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
