import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    return (
        <div className={"expenses"}>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseItem date={props.expensesProps[0].date} title={props.expensesProps[0].title}
                         amount={props.expensesProps[0].amount}/>
            <ExpenseItem date={props.expensesProps[1].date} title={props.expensesProps[1].title}
                         amount={props.expensesProps[1].amount}/>
            <ExpenseItem date={props.expensesProps[2].date} title={props.expensesProps[2].title}
                         amount={props.expensesProps[2].amount}/>
        </div>
    )
}

export default Expenses;