import { useState } from 'react'
import './App.css'
import BudgetInput from './BudgetInput'
import BudgetCalculations from './BudgetCalculations'



const App = () =>{

  const [inputData, setInputData] = useState({
    monthlyGross: '',
    totalExpenses: '',
    savingsGoal: '',
    savingPercentage: ''
  });
  
  const handleSubmit = (data) =>{
    setInputData(data);
  
  };
 
   
 
  return(
    <> 
    <div className = "flex-container">
      <BudgetInput data = {handleSubmit}/>
      {inputData ? (
        <BudgetCalculations data={inputData} />
      ) : (
        <> </>
      )}
    </div>
    </>
  );
};

export default App;
