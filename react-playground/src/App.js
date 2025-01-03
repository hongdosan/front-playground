import React, {useState} from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

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
        /**
         * div1 = "flex items-center justify-center w-screen h-screen bg-blue-100"
         * - flex: "display: flex;" => Flexbox 컨테이너로 설정 (자식 요소들이 수평 방향으로 배치(default)
         * - items-center: "align-items: center;" => Flexbox 컨테이너에서 자식 요소들을 수직 방향(세로) 가운데 정렬
         * - justify-center: "justify-content: center;" => Flexbox 컨테이너에서 자식 요소들을 수평 방향(가로) 가운데 정렬
         * - w-screen: "width: 100vw;" => 이 요소의 너비를 화면 전체 너비로 설정
         * - h-screen: "height: 100vh;" => 이 요소의 높이를 화면 전체 높이로 설정
         * - bg-blue-100 => 숫자에 따른 블루 농도
         *
         * div2 = "w-full p-7 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg"
         * - w-full: "width: 100%;" => 이 요소의 너비를 부모 컨테이너의 전체 너비로 설정
         * - p-7: "padding: 1.75rem" => 이 요소의 내부 여백(padding)을 설정
         * - m-4: "margin: 1rem" => 이 요소의 외부 여백(margin)을 설정
         * - rounded: "border-radius: 0.25rem" => 테두리를 둥글게 설정
         * - shadow => 요소에 기본 그림자를 추가
         * - lg => large breakpoint를 나타냄 (기본값: 1024px 이상)
         * - lg:w-3/4 => 화면 크기가 1024px 이상일 때 이 요소의 너비를 부모 컨테이너의 75%로 설정
         * - lg:max-w-lg => 화면 크기가 1024px 이상일 때 이 요소의 최대 너비를 lg 사이즈로 제한 (Tailwind의 lg 최대 사이즈 = 512px)
         *
         * div3 = "flex justify-between mb-3"
         * - flex: "display: flex;" => 이 요소를 Flexbox 컨테이너로 설정 (자식 요소들이 수평 방향으로 배치)
         * - justify-between: "justify-content: space-between;" => Flexbox 컨테이너에서 자식 요소들이 공간을 동일하게 나누어 양 끝에 배치
         * - mb-3: "margin-bottom: 0.75rem" => 요소의 아래쪽 외부 여백(margin-bottom)을 설정
         */
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-7 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1>To do list</h1>
                </div>

                <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>

                <br/>

                <List todoData={todoData} setTodoData={setTodoData}/>
            </div>
        </div>
    );
}
