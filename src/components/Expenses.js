import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return(
        <div className={"expenses"}>
            <ExpenseItem date={props.expensesProps[0].date} title={props.expensesProps[0].title} amount={props.expensesProps[0].amount}/>
            <ExpenseItem date={props.expensesProps[1].date} title={props.expensesProps[1].title} amount={props.expensesProps[1].amount}/>
            <ExpenseItem date={props.expensesProps[2].date} title={props.expensesProps[2].title} amount={props.expensesProps[2].amount}/>
        </div>
    )
}

export default Expenses;