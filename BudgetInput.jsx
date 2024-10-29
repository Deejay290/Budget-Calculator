import { useState } from "react"

const BudgetInput = ({data}) => {
    const [monthlyGross, setmonthlyGross] = useState('');
    const [totalExpenses, settotalExpenses] = useState('');
    const [savingsGoal, setsavingsGoal] = useState('');
    const [savingPercentage, setsavingPercentage] = useState('');
    


    
    const handleformSubmit = (e) =>{
      e.preventDefault();// prevent the site from going back to default 
        
        data({
            monthlyGross: parseFloat(monthlyGross),
            totalExpenses: parseFloat(totalExpenses),
            savingsGoal: parseFloat(savingsGoal),
            savingPercentage: parseFloat(savingPercentage)
        });
        
    };

    const resetData = () => {

      setmonthlyGross('');
      setsavingPercentage('');
      setsavingsGoal('');
      settotalExpenses('');
    }


    return (
       <div className = "wrapper">
        <form onSubmit = {handleformSubmit}>
          <div className = 'input-container'>
          <table> 
            <tr>               
              <td> <input placeholder = "Monthly Income" className = 'input1' type = 'number' value ={monthlyGross} onChange = {(e) => setmonthlyGross(e.target.value)}/></td>
            </tr>
            <tr>   
              <td> <input placeholder = "Monthly Expenses"className = 'input2' type ='number' value = {totalExpenses} onChange = {(e) => settotalExpenses(e.target.value)}/></td>
            </tr>           
            <tr>  
              <td><input  placeholder = "Percentage Saved" className = 'input3' type = 'number' value = {savingPercentage} onChange = {(e) => setsavingPercentage(e.target.value)}/></td>
          </tr>
            <tr>            
              <td> <input placeholder = "Savings Goal" className = 'input4' type = 'number' value={savingsGoal} onChange = {(e) => setsavingsGoal(e.target.value)}/></td>
            </tr>
            <button type = 'submit'> Calculate </button>
            <button type = 'reset' onClick={resetData}> Reset </button>
          </table>
          </div>
        </form>
      </div>
      
    );
};
export default BudgetInput;