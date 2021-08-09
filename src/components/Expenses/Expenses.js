import React, { useState } from 'react';
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';

function Expenses({expenses}) {

    const [filteredYear, setFilteredYear] = useState('2021')

    const filteredChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filteredChangeHandler} />
            <ExpensesList
                fileteredExpenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses