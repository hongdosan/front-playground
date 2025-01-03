// render()가 필요없고 useState가 필요하기 때문에 Component 제거 후 useState 추가
import React, {useState} from "react";
import "./App.css";

// class, extend 제거 후 함수형 컴포넌트로 변경
export default function App() {
    // 기존에 있던 todoData, value 데이터를 useState로 변경
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    btnStyle = {
        color: "#fff",
        border: "none",
        padding: "4px 7px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    // render 제거
    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>To do list</h1>
                </div>

                <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="value"
                        value={value}
                        placeholder="Enter to-do task."
                        style={{flex: "10", padding: "5px"}}
                        onChange={this.handleChange}
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
                        <div style={this.getTodoStyle(data.completed)} key={data.id}>
                            <input
                                type="checkbox"
                                defaultChecked={false}
                                onChange={() => this.handleCompletedChange(data.id)}
                            />
                            {data.title}
                            <button
                                style={this.btnStyle}
                                onClick={() => this.handleClick(data.id)}
                            >
                                x
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );

    getTodoStyle = (completed) => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted", // 속성의 하단 테두리 설정: 테두리 두깨, 색상, 점선 테두리
            textDecoration: completed ? "line-through" : "none" // 텍스트 중앙에 가로선을 그림
        }
    }

    handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id) // this.state.todoData
        setTodoData(newTodoData); // this.setState({todoData: newTodoData})
    }

    handleChange = (e) => {
        setValue(e.target.value) // this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault(); // form 안에 input 값을 전송할 때 페이지가 리로드 되는 것을 막음

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false
        };

        // this.setState({todoData: [...todoData, newTodo], value: ""});
        setTodoData(prevState => [...prevState, newTodo]);
        setValue("");
    }

    handleCompletedChange = (id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            }

            return data;
        });

        setTodoData({todoData: newTodoData});
    }
}
