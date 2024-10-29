const BudgetCalculations = ({data}) =>{
    const {monthlyGross , totalExpenses, savingsGoal, savingPercentage, resetbtn} = data;

    const disposableincome = monthlyGross - totalExpenses;
    const savings = disposableincome > 0 ? disposableincome * (savingPercentage / 100) : "Invalid";
    const term = savingsGoal / savings; 
    

    return(
    <div>
      <div className = 'results-container'>
        
        <h2 className="DI"> Disposable Income: ${disposableincome > 0 ?  disposableincome.toFixed(0)  : 0}</h2>
        <h2 className = "MS">Monthly Savings: ${savings > 0 ? savings.toFixed(0) : 0}</h2>    
        <h2 className = "Savings">(Months) Term: {term > 0 ? term.toFixed(0) : 0}</h2>
      </div> 
    </div>
    );
};
    export default BudgetCalculations;
