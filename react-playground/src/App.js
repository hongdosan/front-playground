import React, {useState} from "react";
import "./App.css";
import List from "./components/List";

export default function App() {

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false
        };

        setTodoData(prevState => [...prevState, newTodo]);
        setValue("");
    }

    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>To do list</h1>
                </div>

                <form style={{display: 'flex'}} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="value"
                        value={value}
                        placeholder="Enter to-do task."
                        style={{flex: "10", padding: "5px"}}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        value="ENTER"
                        className="btnStyle"
                        style={{flex: "1"}}
                    />
                </form>

                <br/>

                <List todoData={todoData} setTodoData={setTodoData} />
            </div>
        </div>
    );
}
