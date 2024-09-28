let chemicals = [];

// Fetch data from the JSON file
async function fetchChemicals() {
    try {
        const response = await fetch('data.json'); // Fetch the JSON data
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        chemicals = await response.json(); 
        populateTable(); 
    } catch (error) {
        console.error('Failed to fetch chemicals:', error);
    }
}

// Populate the table with chemicals data
function populateTable() {
    const tbody = document.querySelector('#chemicalTable tbody');
    tbody.innerHTML = ''; 

    // Create a new row for each chemical
    chemicals.forEach((chemical, index) => {
        const row = document.createElement('tr');
        row.setAttribute('data-id', chemical.id); 

        const isSelected = chemical.selected ? 'row-selected' : ''; 
        const tickColor = chemical.selected ? 'tick-selected' : 'tick-unselected'; 

        // Create the HTML structure for each row
        row.innerHTML = `
            <td style="display: flex; align-items: center; width: 100%;">
                <i class="fas fa-check ${tickColor}" onclick="selectRow(${index})"></i>
                <span style="margin-right: 5px; margin-left: 10px;">${chemical.id}</span>
                <span class="editable-chemical-name" contenteditable="true" style="flex-grow: 1; padding: 5px;">
                    ${chemical.chemicalName}
                </span>
            </td>
            <td contenteditable="true">${chemical.vendor}</td>
            <td contenteditable="true" class="editable-cell">${chemical.density}</td>
            <td contenteditable="true" class="editable-cell">${chemical.viscosity}</td>
            <td contenteditable="true">${chemical.packaging}</td>
            <td contenteditable="true">${chemical.packSize}</td>
            <td contenteditable="true">${chemical.unit}</td>
            <td contenteditable="true" class="editable-cell">${chemical.quantity}</td>
        `;

        tbody.appendChild(row); // Add the row to the table

        // Add a click event to highlight the selected row
        row.addEventListener('click', () => {
            document.querySelectorAll('tr').forEach(tr => tr.classList.remove('selected-row'));
            row.classList.add('selected-row');
        });

        // Highlight cells and rows when editing
        row.querySelectorAll('[contenteditable="true"]').forEach(cell => {
            cell.addEventListener('focus', () => {
                row.classList.add('editing-row');
                cell.classList.add('editing');
            });
            cell.addEventListener('blur', () => {
                row.classList.remove('editing-row');
                cell.classList.remove('editing');
            });
        });
    });
}

// Add a new row with default values
document.getElementById('addRowBtn').addEventListener('click', () => {
    const newRow = {
        id: chemicals.length + 1,
        chemicalName: '',
        vendor: '',
        density: '',
        viscosity: '',
        packaging: '',
        packSize: '',
        unit: '',
        quantity: '',
        selected: false
    };
    chemicals.push(newRow); 
    populateTable(); 
});

// Select or deselect a row when clicking the tick icon
function selectRow(index) {
    chemicals[index].selected = !chemicals[index].selected;
    populateTable(); 
}

// Update chemical IDs after adding/deleting rows
const updateIDs = () => {
    chemicals.forEach((chemical, index) => {
        chemical.id = index + 1; // Update the ID based on its new position
    });
    populateTable(); 
};

// Delete the selected row
document.getElementById('deleteRowBtn').addEventListener('click', () => {
    const selectedRow = document.querySelector('.selected-row');
    if (selectedRow) {
        const index = Array.from(selectedRow.parentNode.children).indexOf(selectedRow);
        chemicals.splice(index, 1); 
        updateIDs(); 
    } else {
        alert('Please select a row to delete.');
    }
});

// Move the selected row down
document.getElementById('moveDownBtn').addEventListener('click', () => {
    const selectedRow = document.querySelector('.selected-row');
    if (selectedRow) {
        const index = Array.from(selectedRow.parentNode.children).indexOf(selectedRow);
        if (index < chemicals.length - 1) {
            [chemicals[index], chemicals[index + 1]] = [chemicals[index + 1], chemicals[index]]; // Swap rows
            updateIDs(); 
        }
    } else {
        alert('Please select a row to move.');
    }
});

// Move the selected row up
document.getElementById('moveUpBtn').addEventListener('click', () => {
    const selectedRow = document.querySelector('.selected-row');
    if (selectedRow) {
        const index = Array.from(selectedRow.parentNode.children).indexOf(selectedRow);
        if (index > 0) {
            [chemicals[index], chemicals[index - 1]] = [chemicals[index - 1], chemicals[index]]; // Swap rows
            updateIDs(); 
        }
    } else {
        alert('Please select a row to move.');
    }
});

// Refresh the table
document.getElementById('refreshBtn').addEventListener('click', () => {
    populateTable(); 
});

// Save the data (currently just logs the data)
document.getElementById('saveBtn').addEventListener('click', () => {
    console.log('Saved data:', chemicals);
    alert('Data saved (Check console for output)');
});

// Initial data fetch and table population
fetchChemicals();
