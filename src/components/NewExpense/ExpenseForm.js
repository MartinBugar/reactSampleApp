import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput, // skopiruje vsetky veci v danom objekte
        //     enteredTitle: event.target.value, // prepise ten jeden ktory treba prepisat
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput, // skopiruje vsetky veci v danom objekte
        //     enteredAmount: event.target.value, // prepise ten jeden ktory treba prepisat
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, // skopiruje vsetky veci v danom objekte
        //     enteredDate: event.target.value, // prepise ten jeden ktory treba prepisat
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault(); // defaultne by sa poslal hhtp request na server, toto spravi 6e sa neposle, takze sa stranka nereloadne
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        props.onSaveExpenseData(expenseData); // toto mi ulozi nasetovane data do parentovskej premennej cez props
        //teraz nasetujeme prazdne hodnoty a vycistime input
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler} action="">
            <div className={'new-expense__controls'}>
                <div className={'new-expense__control'}>
                    <label htmlFor="">Title</label>
                     {/*two way binding - ked sa zmeni on change tak sa na to iste zmeni aj input*/}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className={'new-expense__control'}>
                    <label htmlFor="">Amount</label>
                    <input type="number" min={'0.01'} step={'0.01'} value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className={'new-expense__control'}>
                    <label htmlFor="">Date</label>
                    <input type="date" min={"2019-01-01"} max={"2022-12-31"} value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className={'new-expense__actions'}>
                <button type={'submit'}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;