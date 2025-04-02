document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expensesList = document.getElementById("expenses-list");
    const totalAmount = document.getElementById("total-amount");
    const expenseChartCanvas = document.getElementById("expense-chart");
    const themeToggle = document.getElementById("theme-toggle");
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let chartInstance = null;
    
    // Darkmode theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
    
    function renderExpenses() {
        expensesList.innerHTML = "";
        let total = 0;
        expenses.forEach((expense, index) => {
            total += parseFloat(expense.amount);
            const expenseItem = document.createElement("div");
            expenseItem.classList.add("expense-item");
            expenseItem.innerHTML = `
                <span>${expense.name} - $${expense.amount} - (${expense.category}) - (${expense.date}) </span>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            expensesList.appendChild(expenseItem);
        });
        totalAmount.textContent = total.toFixed(2);
        document.getElementById("expense-name").innerHTML = '';
        document.getElementById("expense-name").value = '';
        updateChart();
    }
    
    // New expense
    function addExpense(event) {
        event.preventDefault();
        const nameInput = document.getElementById("expense-name");
        const amountInput = document.getElementById("expense-amount");
        const dateInput = document.getElementById("expense-date");
        const categoryInput = document.getElementById("expense-category");
        
        const name = nameInput.value;
        const amount = amountInput.value;
        const date = dateInput.value || new Date().toISOString().split("T")[0];
        const category = categoryInput.value;
        
        if (name.length >= 3 && amount > 0) {
            expenses.push({ name, amount, date, category });
            localStorage.setItem("expenses", JSON.stringify(expenses));}
            
        
         // after submit clean the form
         document.getElementById("expense-name").innerHTML = '';
         document.getElementById("expense-amount").value = '';
         document.getElementById("expense-date").value = '';
         document.getElementById("expense-category").selectedIndex=0;

        renderExpenses();
        updateChart();

    } 
    function deleteExpense(index) {
        expenses.splice(index, 1);
        localStorage.setItem("expenses", JSON.stringify(expenses));
        renderExpenses();
    }
    
    expensesList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            const index = event.target.getAttribute("data-index");
            deleteExpense(index);
        }
    });
    
    // Функция для обновления диаграммы расходов
    function updateChart() {
        const categories = {};
        expenses.forEach(expense => {
            categories[expense.category] = (categories[expense.category] || 0) + parseFloat(expense.amount);
        });
        
        const chartData = {
            labels: Object.keys(categories),
            datasets: [{
                data: Object.values(categories),
                backgroundColor: [ "#bb1a50","#e91e63","#88002d","#f06292", "#e91e63","#b80c45",],
            }]
            
        };
        
        if (chartInstance) {
            chartInstance.destroy();
        }
        
        chartInstance = new Chart(expenseChartCanvas, {
            type: "pie",
            data: chartData,
        });
    }
    
    // Добавление обработчика события для формы
    expenseForm.addEventListener("submit", addExpense);
    
    // Первоначальное отображение данных при загрузке страницы
    renderExpenses();
    
});
// Dark mode
let darkmode = localStorage.getItem('darkmode')
const themeToggle = document.getElementById('theme-toggle')

const enableDarkmode = ()=>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}
if(darkmode ===  "active") enableDarkmode()
themeToggle.addEventListener("click",()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()

})