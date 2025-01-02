// 리액트 라이브러리에서 컴포넌트를 가져옴. 이는 컴포넌트에서 제공하는 render() 메서드를 사용하기 위함.
import React, {Component} from "react";
import "./App.css";

/**
 * export
 * - 모듈(파일)에서 특정 변수, 함수, 클래스 등을 다른 파일에서 사용할 수 있도록 내보냄
 * - 모듈화를 통해 코드 재사용성을 높이고, 필요한 것만 선택적으로 가져올 수 있게 함
 * - 즉, 특정 클래스를 다른 파일에서 가져다 사용할 수 있도록 내보냄.
 *
 * default
 * - 모듈에서 하나의 기본 내보내기를 지정
 * - 기본 내보내기는 해당 모듈에서 가장 중요한 하나의 값을 내보낼 때 사용됨.
 * - 이는 가져올 때 중괄호({}) 없이 이름을 자유롭게 사용할 수 있음.
 * - 예를 들어, "import MyApp from './App';" 와 같이 가져올 수 있음
 *
 * export vs export default
 * - export default는 기본 내보내기로 export와 달리 파일당 하나만 사용 가능하고 가져올 때 중괄호 없이 가져올 수 있으며 이름 변경이 자유로움.
 * - 반면, export 여러 값을 내보낼 수 있고 가져올 때는 중괄호({}) 사용해야 함.
 * - 또한 export는 내보낸 이름과 동일한 이름으로 가져와야 하며, 이름 변경 시 as 키워드 필요.
 */
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

    // todo Data
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

    // todo list style
    getStyle = () => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted", // 속성의 하단 테두리 설정: 테두리 두깨, 색상, 점선 테두리
            textDecoration: "none" // 텍스트에 적용된 장식(점선, 취소선) 제어: 기본 장식 제거
        }
    }

    handleClick = (id) => {
        let newTodoData = this.todoData
            .filter(data => data.id !== id) // filter에 해당하는 조건이 true일 경우 데이터 반환

        console.log('newTodoData:', newTodoData);
    }

    // 함수형 컴포넌트는 없어도 되지만 클래스 컴포넌트애서는 render()를 사용해서 JSX를 반환해야 하기 때문에 render() 사용
    render() {
        return (
            <div className="container">
                <div className="todoBlock">
                    <div className="title">
                        <h1>To do list</h1>
                    </div>

                    {
                        /* map() 메서드는 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열 반환 */
                        this.todoData.map((data) => (
                            /**
                             * 키 속성을 넣지 않으면 다음과 같은 에러 발생: Warning: Each child in an array or iterator should have a unique "key" prop
                             * 이로 인해, 리액트에서 요소의 리스트를 나열할 때는 Key를 넣어야 함.
                             * key 속성: 키는 React가 변경, 추가 또는 제거된 항목을 식별하는 데 도움이 됨. 즉 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 함.
                             * 예를 들어, 리액트는 virtual dom을 이용해 바뀐 부분만 적용된다고 했는데, 이 키 속성을 이용해서 변경된 부분을 찾을 수 있음.
                             * 이 키는 유니크한 값을 넣어줘야 하는데, 인덱스는 권장하지 않음. (추가, 삭제, 변경 시 키들도 바뀌기 때문)
                             */
                            <div style={this.getStyle()} key={data.id}>
                                <input type="checkbox" defaultChecked={false}/>
                                {data.title /* 실제 데이터가 들어가기 위해 중괄호로 감싸야 함. */}
                                <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
