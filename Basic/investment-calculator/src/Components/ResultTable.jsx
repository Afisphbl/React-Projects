import "../Styles/ResultTable.css";

function ResultTable({ investments }) {
  return (
    <>
      {investments.length === 0 && (
        <p style={{ textAlign: "center" }}>No investments found</p>
      )}
      {investments.length > 0 && (
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment) => (
              <tr>
                <td>{investment.year}</td>
                <td>{investment.current__total}</td>
                <td>{investment.yearly__inter}</td>
                <td>{investment.total__inter}</td>
                <td>{investment.invested}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ResultTable;
