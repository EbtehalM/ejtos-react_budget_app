
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget ,expenses ,currency } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const input = event.target.value;
        const upperLimit = 20000;

        if(input > upperLimit) {
            alert("The value cannot exceed the upper limit £"+upperLimit);
            return;
        } else if(input <= totalExpenses) {
            alert("The value cannot be lower than the spending £"+totalExpenses);
            return;
        }
        setNewBudget(input);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" max="20000" min={totalExpenses} step="10" value={newBudget} 
onChange={handleBudgetChange}>
</input>
</div>
    );
};
export default Budget;