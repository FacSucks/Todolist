import React from "react";
export const Form = ({ setInputText, todos, setToDos, inputText }) => {
    const onChangeHandler = (event) => {

        console.log(event.target.value)
        setInputText(event.target.value)
    }
    const onClickHandler = (event) => {
        event.preventDefault()
        setToDos([...todos, { text: inputText, completed: false, id: Math.random() * 10 }])
        setInputText('')
    }
    return (
        <form>
            <input type="text" className="todo-input" onChange={onChangeHandler} value={inputText} />
            <button className="todo-button" type="submit" onClick={onClickHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
