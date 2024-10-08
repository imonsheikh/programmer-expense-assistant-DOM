//Getting all the value by globally

//add event listener for calculate Button
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function () {
  // console.log(Kaj korche);
  // console.table({income, software, courses, internet});
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  // console.table({totalExpenses, balance});
  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");

  //expense history 
  const historyItem = document.createElement('div')
  historyItem.className = "bg-white p-3 rounded-md border-l-2 border-blue-500"

  historyItem.innerHTML = `
     <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
     <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
     <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
     <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
  `
   const historyContainer = document.getElementById('history-list')
   historyContainer.insertBefore(historyItem, historyContainer.firstChild)
});

//add event listener for calculate Saving  Button2
const calculateSavingButton = document.getElementById("calculate-savings");
calculateSavingButton.addEventListener("click", function () {
  const savingPercentage = parseFloat(document.getElementById("savings").value);

  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const savingAmount = (savingPercentage * balance) / 100;
  console.log(savingAmount);

  const savingElement = document.getElementById('savings-amount')
  savingElement.innerText = savingAmount.toFixed(2)

  const remainingBalance = balance - savingAmount
  const remainingElement = document.getElementById('remaining-balance')
  remainingElement.innerText = remainingBalance.toFixed(2)
});



//history tab functionality
const historyTab = document.getElementById('history-tab')
const assistantTab = document.getElementById('assistant-tab')

historyTab.addEventListener('click', function(){

      historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    historyTab.classList.remove('text-gray-600')
    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    assistantTab.classList.add('text-gray-600')

    document.getElementById('expense-form').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
})