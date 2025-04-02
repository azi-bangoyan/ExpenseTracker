# Expense Tracker

A simple web application to track personal expenses with category visualization and dark mode support.

## Features
- Add expenses with name, amount, date, and category
- Delete individual expenses
- View total expenses
- Visual expense breakdown by category using a pie chart
- Dark/Light mode toggle with persistent state
- Responsive design
- Local storage persistence
- Date picker integration

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- [Chart.js](https://www.chartjs.org/) - For pie chart visualization
- [Flatpickr](https://flatpickr.js.org/) - For date picker functionality

## Installation
1. Clone the repository or download the source code
```bash
git clone <repository-url>
```
Open the project folder
```bash
cd expense-tracker
```
Open index.html in a web browser
- You can use a local server like Live Server in VS Code for better experience
- No additional installation required as all dependencies are loaded via CDN

expense-tracker/
├── index.html    # Main HTML structure
├── style.css     # Styles and dark mode implementation
└── script.js     # Application logic and chart functionality
## Usage
- Enter expense details:
- Name (minimum 3 characters)
- Amount (positive number)
- Date (optional, defaults to current date)
- Category (select from dropdown)
- Click "Add Expense" to record the expense
- View expenses in the list below
- Click "Delete" to remove individual expenses
- Use the theme toggle button in the navigation bar to switch between light and dark modes
- View category breakdown in the pie chart
## Screenshots
Light Mode
<img width="1704" alt="Screenshot 2025-04-02 at 19 01 17" src="https://github.com/user-attachments/assets/3738c3d0-f96e-4aba-8021-be95be8bada1" />


Dark Mode
<img width="1717" alt="Screenshot 2025-04-02 at 19 01 33" src="https://github.com/user-attachments/assets/7d0daf51-67c3-4279-849f-711c985db829" />


## Local Storage
- Expenses are automatically saved to browser's local storage
- Theme preference is persisted between sessions
- Data remains until manually deleted or browser storage is cleared
## Styling
- Responsive design with flexbox layout
- Custom color scheme (Pink/Purple tones)
- Smooth transitions and hover effects
- Shadow effects for depth
- Mobile-friendly interface
## nown Limitations
- No data export/import functionality
- No expense editing capability
- Local storage limited by browser constraints
- No currency selection
##Future Improvements
- Add expense editing functionality
- Implement data export/import
- Add multiple currency support
- Include monthly/yearly summaries
- Add budget tracking features
## Contributing
- Fork the repository
- Create your feature branch (git checkout -b feature/amazing-feature)
- Commit your changes (git commit -m 'Add some amazing feature')
- Push to the branch (git push origin feature/amazing-feature)
- Open a Pull Request
## License
This project is open-source and available under the MIT License.

## Acknowledgments
- Chart.js team for the charting library
- Flatpickr contributors for the date picker
- Inspired by personal finance tracking needs
