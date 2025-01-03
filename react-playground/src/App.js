// render()가 필요없고 useState가 필요하기 때문에 Component 제거 후 useState 추가
import React, {useState} from "react";
import "./App.css";

// class, extend 제거 후 함수형 컴포넌트로 변경
export default function App() {
    // 기존에 있던 todoData, value 데이터를 useState로 변경
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    // btnStyle -> const btnStyle
    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "4px 7px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    // getTodoStyle = (completed) => {...}) -> const getTodoStyle = (completed) => {...})
    const getTodoStyle = (completed) => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none"
        }
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id) // this.state.todoData -> todoData
        setTodoData(newTodoData); // this.setState({todoData: newTodoData}) -> setTodoData(newTodoData)
    }

    const handleChange = (e) => {
        setValue(e.target.value) // this.setState({value: e.target.value}) -> setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false
        };

        // this.setState({todoData: [...todoData, newTodo], value: ""});
        // -> setTodoData(prevState => [...prevState, newTodo]);
        // -> setValue("");
        setTodoData(prevState => [...prevState, newTodo]);
        setValue("");
    }

    const handleCompletedChange = (id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            }

            return data;
        });

        setTodoData({todoData: newTodoData});
    }

    // render remove
    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>To do list</h1>
                </div>

                {/*this.handleSubmit -> handleSubmit*/}
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

                {
                    todoData.map((data) => (
                        <div style={getTodoStyle(data.completed)} key={data.id}>
                            <input
                                type="checkbox"
                                defaultChecked={false}
                                onChange={() => handleCompletedChange(data.id)}
                            />
                            {data.title}
                            <button
                                style={btnStyle}
                                onClick={() => handleClick(data.id)}
                            >
                                x
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
