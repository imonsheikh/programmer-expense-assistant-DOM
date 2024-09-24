// console.log("testing");
const calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function(){
    // console.log(Kaj korche);
    const income = parseFloat(document.getElementById('income').value)
    const software = parseFloat(document.getElementById('software').value)
    const courses = parseFloat(document.getElementById('courses').value)
    const internet = parseFloat(document.getElementById('internet').value)

    // console.table({income, software, courses, internet});

    const totalExpenses = software + courses + internet
    
    
    
})