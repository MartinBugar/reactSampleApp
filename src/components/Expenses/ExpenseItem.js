import {useState} from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294;

    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        if (title==='Updated') {
            setTitle(props.title);
        } else {
            setTitle('Updated');
        }

        console.log(title);
    }

    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date}/>
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    )
}

export default ExpenseItem;