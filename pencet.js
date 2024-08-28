document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const historyList = document.getElementById('history-list');

    // Load history from localStorage
    const loadHistory = () => {
        const history = JSON.parse(localStorage.getItem('loginHistory')) || [];
        historyList.innerHTML = '';
        history.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = entry;
            historyList.appendChild(li);
        });
    };

    loadHistory();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const now = new Date().toLocaleString();
        const history = JSON.parse(localStorage.getItem('loginHistory')) || [];

        // Add new entry to history
        history.push(`${username} logged in at ${now}`);
        localStorage.setItem('loginHistory', JSON.stringify(history));

        // Update the history list
        loadHistory();

        // Reset the form
        form.reset();
    });
});
