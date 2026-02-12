import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import ResultTable from "./Components/ResultTable";
import { useState } from "react";

function App() {
  const [investments, setInvestments] = useState([]);

  function onAddInvestment(investment) {
    setInvestments(investment);
  }
  return (
    <>
      <Header />
      <UserInput onAddInvestment={onAddInvestment} />
      <ResultTable investments={investments} />
    </>
  );
}

export default App;
