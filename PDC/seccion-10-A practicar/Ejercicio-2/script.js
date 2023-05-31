const originalTableData = [
    { country: 'Argentina', score: 700 },
    { country: 'Brasil', score: 800 },
    { country: 'Chile', score: 600 },
    { country: 'México', score: 750 },
    { country: 'Perú', score: 500 }
];

// Obtenemos los elementos HTML
const addButton = document.querySelector('#add-button');
const resetButton = document.querySelector('#reset-button');
const startStopButton = document.querySelector('#start-stop-button');
const versionsSelect = document.querySelector('#versions-select');

// Asignamos los eventos correspondientes
addButton.addEventListener('click', addRow);
resetButton.addEventListener('click', resetTable);
startStopButton.addEventListener('click', startStopUpdating);
versionsSelect.onchange = loadTableState;

function addRow() {
    const tableBody = document.querySelector('#tabla tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
    `;
    tableBody.appendChild(newRow);
}

function resetTable() {
    const tableBody = document.querySelector('#tabla tbody');
    tableBody.innerHTML = '';
    originalTableData.forEach(data => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${data.country}</td>
            <td contenteditable="true">${data.score}</td>
        `;
        tableBody.appendChild(newRow);
    });
}

function saveTableState() {
    const tableBody =document.querySelector('#tabla tbody');
    const tableData = [];
    tableBody.querySelectorAll('tr').forEach(row => {
        const country = row.querySelector('td:first-child').textContent;
        const score = parseInt(row.querySelector('td:last-child').textContent);
        tableData.push({ country, score });
    });
    const selectInput = document.querySelector('#versions-select');
    const option = document.createElement('option');
    option.value = selectInput.childElementCount;
    const date = new Date().toLocaleString();
    option.text = `Versión ${option.value} (${date})`;
    selectInput.appendChild(option);
    localStorage.setItem(`tabla-${option.value}`, JSON.stringify(tableData));
}

function loadTableState() {
    const selectInput = document.querySelector('#versions-select');
    const selectedOption = selectInput.options[selectInput.selectedIndex];
    const versionData = JSON.parse(localStorage.getItem(`tabla-${selectedOption.value}`));
    const tableBody = document.querySelector('#tabla tbody');
    tableBody.innerHTML = '';
    versionData.forEach(data => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${data.country}</td>
            <td contenteditable="true">${data.score}</td>
        `;
        tableBody.appendChild(newRow);
    });
}

function sortTable(columnIndex) {
    const tableBody = document.querySelector('#tabla tbody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const sortDirection = rows[0].querySelectorAll('td')[columnIndex].classList.contains('asc') ? -1 : 1;
    rows.sort((rowA, rowB) => {
        const cellA = rowA.querySelectorAll('td')[columnIndex].textContent;
        const cellB = rowB.querySelectorAll('td')[columnIndex].textContent;
        if (cellA < cellB) return -sortDirection;
        if (cellA > cellB) return sortDirection;
        return 0;
    });
    rows.forEach(row => tableBody.appendChild(row));
    rows[0].querySelectorAll('td')[columnIndex].classList.toggle('asc');
}

let intervalId;

function startStopUpdating() {
    const button = document.querySelector('#start-stop-button');
    if (button.classList.contains('stopped')) {
        clearInterval(intervalId);
        button.classList.remove('stopped');
    } else {
        intervalId = setInterval(() => {
            const tableBody = document.querySelector('#tabla tbody');
            tableBody.querySelectorAll('tr').forEach(row => {
                const scoreCell = row.querySelector('td:last-child');
                scoreCell.textContent = Math.floor(Math.random() * 1000);
            });
            sortTable(1);
            saveTableState();
        }, 3000);
        button.classList.add('stopped');
    }
    
}