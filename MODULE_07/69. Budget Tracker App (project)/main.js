// finding startBudget
const startBudget = document.getElementById('startBudget');
startBudget.addEventListener('click', getExpenses);

// getExpense function
function getExpenses(event){
    const numberOfExpenses = document.getElementById('numberOfExpenses').value;
    const expenseInputsDiv = document.getElementById('expenseInputs');
    expenseInputsDiv.innerHTML = '';
    console.log(numberOfExpenses);

    for(let i = 1; i<=numberOfExpenses; i++){

    }
}