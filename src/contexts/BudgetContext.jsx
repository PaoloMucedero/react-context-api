/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const BudgetContext = createContext(null);

export function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget deve essere usato dentro BudgetProvider");
  }
  return context;
}

export default BudgetContext;
