// 리액트 라이브러리에서 컴포넌트를 가져옴. 이는 컴포넌트에서 제공하는 render() 메서드를 사용하기 위함.
import React, {Component} from "react";
import "./App.css";

export default class App extends Component {
    // todo button style
    btnStyle = {
        color: "#fff",
        border: "none",
        padding: "4px 7px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    // todo list style
    getStyle = () => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted", // 속성의 하단 테두리 설정: 테두리 두깨, 색상, 점선 테두리
            textDecoration: "none" // 텍스트에 적용된 장식(점선, 취소선) 제어: 기본 장식 제거
        }
    }

    todoData = [
        {
            id: "1",
            title: "react study",
            completed: true
        },
        {
            id: "2",
            title: "home clean",
            completed: false
        }
    ]

    // 함수형 컴포넌트는 없어도 되지만 클래스 컴포넌트애서는 render()를 사용해서 JSX를 반환해야 하기 때문에 render() 사용
    render() {
        return (
            <div className="container">
                <div className="todoBlock">
                    <div className="title">
                        <h1>To do list</h1>
                    </div>

                    {this.todoData.map((data) => (
                        // 키 속성을 넣지 않으면 다음과 같은 에러 발생: Warning: Each child in an array or iterator should have a unique "key" prop
                        // 이로 인해, 리액트에서 요소의 리스트를 나열할 때는 Key를 넣어야 함.
                        // key 속성: 키는 React가 변경, 추가 또는 제거된 항목을 식별하는 데 도움이 됨. 즉 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 함.
                        // 예를 들어, 리액트는 virtual dom을 이용해 바뀐 부분만 적용된다고 했는데, 이 키 속성을 이용해서 변경된 부분을 찾을 수 있음.
                        // 이 키는 유니크한 값을 넣어줘야 하는데, 인덱스는 권장하지 않음. (추가, 삭제, 변경 시 키들도 바뀌기 때문)
                        <div style={this.getStyle()} key={data.id}>
                            <input type="checkbox" defaultChecked={false}/>
                            {/*실제 데이터가 들어가기 위해 중괄호로 감쌈*/}
                            {data.title}
                            <button style={this.btnStyle}>x</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

// map() 메서드는 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
