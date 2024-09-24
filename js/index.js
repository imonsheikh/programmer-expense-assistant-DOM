//Getting all the value by globally
const income = parseFloat(document.getElementById('income').value)
const software = parseFloat(document.getElementById('software').value)
const courses = parseFloat(document.getElementById('courses').value)
const internet = parseFloat(document.getElementById('internet').value)

//add event listener for calculate Button
const calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function(){
    // console.log(Kaj korche);


    // console.table({income, software, courses, internet});

    const totalExpenses = software + courses + internet
    const balance = income - totalExpenses

    // console.table({totalExpenses, balance});
    
    const totalExpensesElement = document.getElementById('total-expenses')
    totalExpensesElement.innerText = totalExpenses.toFixed(2) 
    
    const balanceElement = document.getElementById('balance')
    balanceElement.innerText = balance.toFixed(2)

    const result = document.getElementById('results')
    result.classList.remove('hidden')
})


//add event listener for calculate Saving  Button
const calculateSavingButton = document.getElementById('calculate-savings')
calculateSavingButton.addEventListener('click', function(){

const savingPercentage = parseFloat(document.getElementById('savings').value)
console.log(savingPercentage);

})