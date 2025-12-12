# Expense Tracker 💰

A modern and interactive expense tracker web application built with React, Vite, and TailwindCSS to help you manage your finances effortlessly.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📸 Preview

<img width="1920" height="1200" alt="Screenshot 2025-12-11 192030" src="https://github.com/user-attachments/assets/df1583ea-9618-4592-bc73-0ce964f02e33" />

<img width="1920" height="1200" alt="Screenshot 2025-12-11 192043" src="https://github.com/user-attachments/assets/c6034289-daa4-40dd-b827-f393cd74c2f3" />

## ✨ Features

- **💰 Budget Management**: Set and track your monthly budget
- **➕ Add Expenses**: Quickly add expenses with name, category, and amount
- **✏️ Edit Expenses**: Modify existing expense entries
- **🗑️ Delete Expenses**: Remove unwanted expenses with confirmation
- **📊 Visual Dashboard**: View expense breakdown with interactive charts
- **📂 Category Filtering**: Filter expenses by categories (Food, Travel, Shopping, etc.)
- **💾 Local Storage**: Automatic data persistence - your data is saved locally
- **📈 Real-time Calculations**: Instant budget vs expense tracking
- **📱 Responsive Design**: Works seamlessly on all devices
- **🎨 Modern UI**: Clean and intuitive interface with Lucide icons

## 🛠️ Technologies Used

- **React 19.1.1**: Modern UI library with hooks
- **Vite 7.1.7**: Lightning-fast build tool and dev server
- **TailwindCSS 4.1.14**: Utility-first CSS framework
- **Recharts 3.3.0**: Composable charting library for data visualization
- **Lucide React**: Beautiful & consistent icon toolkit
- **React DatePicker**: Date selection component
- **date-fns**: Modern JavaScript date utility library
- **LocalStorage API**: Client-side data persistence
- **No Backend Required**: Pure frontend application

## 📋 Project Structure

```
MY-EXPENSE-TRACKER/
├── src/
│   ├── components/
│   │   ├── Addbudgetcard.jsx       # Budget addition modal
│   │   ├── Addexpensecard.jsx      # Expense creation form
│   │   ├── Deleteexpense.jsx       # Delete confirmation modal
│   │   ├── Editexpensecard.jsx     # Expense editing form
│   │   ├── Expensedashboard.jsx    # Charts & visualizations
│   │   ├── Menubar.jsx             # Category filter menu
│   │   └── Totalbudnexp.jsx        # Budget/Expense summary
│   ├── App.jsx                      # Main application component
│   ├── App.css                      # Component styles
│   ├── index.css                    # Global styles
│   └── main.jsx                     # Application entry point
├── public/                          # Static assets
├── index.html                       # HTML template
├── package.json                     # Dependencies & scripts
└── vite.config.js                   # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AbdulMateenMiyanoor0711/expense-tracker.git
   ```

2. **Navigate to project directory**

   ```bash
   cd expense-tracker
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   Visit http://localhost:5173
   ```

## 📦 Available Scripts

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint to check code quality
```

## 💡 How to Use

1. **Set Your Budget**: Click "Add Budget" to set your monthly budget amount
2. **Add Expenses**: Click "Add Expense" and fill in the details (name, category, amount, date)
3. **Track Spending**: View your total budget, expenses, and remaining balance in real-time
4. **Filter by Category**: Use the category buttons to filter expenses
5. **Visualize Data**: Check the dashboard for pie charts and expense trends
6. **Edit/Delete**: Modify or remove expenses using the action buttons
7. **Data Persistence**: Your data is automatically saved and persists across sessions

## 🎨 Features in Detail

### Budget Tracking

- Set and update your budget anytime
- Real-time calculation of remaining balance
- Visual indicators for budget status

### Expense Management

- Add expenses with category, name, amount, and date
- Edit existing expenses
- Delete with confirmation to prevent accidents
- Automatic total expense calculation

### Data Visualization

- Pie chart showing expense distribution by category
- Bar chart for expense trends
- Interactive tooltips and legends

### Category System

Organized expense categories:

- 🍕 Food
- ✈️ Travel
- 🛍️ Shopping
- 🎮 Entertainment
- 🏥 Healthcare
- 📚 Education
- 💡 Utilities
- 🔧 Others

## 🔄 Future Enhancements

- [ ] Multiple budget periods (weekly, monthly, yearly)
- [ ] Export data to CSV/PDF
- [ ] Dark mode support
- [ ] Cloud sync with backend
- [ ] Mobile app version
- [ ] Expense categories customization
- [ ] Recurring expenses
- [ ] Multi-currency support
- [ ] Spending analytics and insights

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- Edit functionality needs to be connected to state management
- Delete button requires index prop to function correctly
- Charts need integration with filtered data

## 📧 Contact

**Abdul Mateen Miyanoor**

- GitHub: [@AbdulMateenMiyanoor0711](https://github.com/AbdulMateenMiyanoor0711)
- Project Link: [https://github.com/AbdulMateenMiyanoor0711/expense-tracker](https://github.com/AbdulMateenMiyanoor0711/expense-tracker)

---

<div align="center">

⭐ If you found this helpful, please give it a star! ⭐

![GitHub stars](https://img.shields.io/github/stars/AbdulMateenMiyanoor0711/expense-tracker?style=social)
![GitHub forks](https://img.shields.io/github/forks/AbdulMateenMiyanoor0711/expense-tracker?style=social)

Made with ❤️ by Abdul Mateen Miyanoor

</div>
