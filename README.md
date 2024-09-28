#Chemical Table Project
Welcome to the Chemical Table Project! This is a simple web-based tool that helps manage chemical data in a table format. You can easily add, edit, sort, move, and delete rows of chemical information. The best part? It's all built using plain HTML, CSS, and JavaScript — no fancy frameworks required!

🌟Features
Dynamic Table: The table loads data from a file and displays it on the page.Select & Highlight Rows: Click to select rows, which will highlight them for easy tracking.Inline Editing: Double-click on any cell to edit data directly within the table.Add & Remove Rows: Easily add new rows or delete existing ones.
Move Rows: You can move selected rows up or down within the table.Responsive Layout: The table works smoothly across all devices, from desktops to smartphones.
Easy Toolbar: Control the table with toolbar buttons for actions like adding, deleting, and moving rows.

🔧Technologies Used
HTML5 for the structure CSS3 for styling and responsive design JavaScript for table interaction and functionality.

🚀 Getting Started
Prerequisites
To run this project, you’ll need:A web browser (Chrome, Firefox, etc.)
Git installed on your computer if you're using the repository.

Running the Project
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/SouravN008/ChemicalTable.git
Navigate to the project directory:

bash
Copy code
cd ChemicalTable

📂 Project Structure
index.html: Main file that contains the table layout.
style.css: The stylesheet that gives the table a clean, modern look.
script.js: Handles all the interactions like adding rows, editing, and moving them.
data.json: Contains the sample data for the table, which you can modify to suit your needs.

⚙️ How It Works
Loading Data
The table data comes from data.json. Each chemical entry looks like this:

json
Copy code
{
  "id": 1,
  "chemicalName": "Acetone",
  "vendor": "ABC Chemicals",
  "density": "0.79",
  "viscosity": "0.32",
  "quantity": "100",
  "selected": false
}

Main Functions
Adding Rows: Adds a new blank row at the bottom of the table.
Editing Rows: Double-click any cell (e.g., "Chemical Name") to start editing.
Deleting Rows: Select a row and click the "Delete" button to remove it.
Moving Rows: Move rows up or down within the table by selecting them and using the toolbar buttons.

🎨 Custom Styling
Editable Cells: Cells like "Density" and "Viscosity" have rounded borders and padding for a neat appearance.
Responsive Design: The layout adjusts to different screen sizes, so you can easily manage the table on your phone or tablet.
Highlighting: When a row is selected, it’s highlighted in blue for easy identification. Cells being edited also get a light blue background.

📖 Usage Tips
Editing: Double-click any cell to edit its contents.
Selection: Use the checkmark icon to select or deselect rows.
Toolbar: The toolbar at the top lets you quickly add, delete, or move rows.
Refresh: If anything looks off, hit the refresh button to reload the table!

📜 License
This project is free and open-source under the MIT License.
