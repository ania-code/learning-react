import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({fileteredExpenses}) => {

    if (fileteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    return <ul className='expenses-list'>
        {fileteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
        ))}
    </ul>
}

export default ExpensesList