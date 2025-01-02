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
    btnStyle = {
        color: "#fff",
        border: "none",
        padding: "4px 7px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    /**
     * 리액트에서 데이터가 변할 때 화면을 렌더링 해주기 위해선 React State를 사용해야 함.
     * 이는 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체임.
     * 예를 들어, State가 변경되면 컴포넌트는 Re-Rendering 됨. 이때 State는 컴포넌트 안에서 관리됨.
     */
    state = {
        todoData: [
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
        ],
        value: ""
    }

    // 함수형 컴포넌트는 없어도 되지만 클래스 컴포넌트애서는 render()를 사용해서 JSX를 반환해야 하기 때문에 render() 사용
    render = () => {
        return (
            // JSX는 컴포넌트에 여러 엘리먼트 요소가 있다면 반드시 부모 요소 하나로 감싸줘야 하기 때문에, container div 요소로 감쌈
            <div className="container">
                <div className="todoBlock">
                    <div className="title">
                        <h1>To do list</h1>
                    </div>

                    {/**
                     * style
                     * - 첫 번째 중괄호는 JSX 문법에서 JavaScript 표현식을 전달하기 위해 필요
                     * - 두 번째 중괄호는 전달할 JavaScript 객체를 정의하기 위해 필요
                     *
                     * flex
                     * - CSS의 Flexbox 레이아웃에서 사용되는 단축 속성으로, 플렉스 아이템(flex item)의 크기를 설정하는 데 사용
                     * - 이는 부모 요소가 Flexbox 컨테이너이고, 자식 요소에 flex 스타일을 적용됨.
                     * - 예를 들어, 부모 컨테이너의 남는 공간을 균등하게 나눠 차지함.
                     * - 만약, 부족한 공간이 발생하면 다른 플렉스 아이템과 함께 크기를 줄이는 동작을 함.
                     */}
                    <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="value"
                            value={this.state.value}
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

                    {
                        /* map() 메서드는 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열 반환 */
                        this.state
                            .todoData
                            .map((data) => (
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
        );
    }

    /**
     * 일반 함수 메서드 정의 방식인 getStyle() { ... } 방식과 하기 방식인 화살표 함수 메서드 정의 방식의 차이점
     * - 일반 함수 메서드 정의 방식은 React 클래스 컴포넌트의 메서드가 기본적으로 this와 자동으로 바인딩되지 않음.
     * - 따라서 일반 함수 메서드 정의 방식으로 메서드를 이벤트 핸들러로 사용할 경우, this가 올바르게 바인딩되지 않을 수 있음.
     * - 반면 화살표 함수 메서드 정의 방식은 자신만의 this를 가지지 않고, 상위 스코프의 this를 그대로 사용.
     * - 즉, 자동으로 올바른 this가 바인딩되므로, 명시적으로 바인딩할 필요가 없음.
     *
     * 화살표 함수 메서드 정의 방식 권장 이유
     * - 자동 this binding: 상위 스코프의 this를 자동으로 바인딩. 따라서 bind를 사용하거나 constructor에서 추가적인 작업을 할 필요가 없음.
     * - 가독성: 코드가 더 간결하며, 클래스 필드 선언 형태로 작성되어 가독성이 높음.
     * - 일관성: 여러 이벤트 핸들러를 정의할 때, 모두 동일한 방식으로 작성하면 유지보수가 쉬움.
     * - 최신 React 권장 사항: 클래스 컴포넌트를 사용하는 경우에는 화살표 함수가 더 현대적인 패턴으로 간주.
     * - 다만 최신 React에서는 함수형 컴포넌트와 useState, useEffect 같은 훅(Hooks)을 더 권장하긴 함.
     */
    getStyle = () => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted", // 속성의 하단 테두리 설정: 테두리 두깨, 색상, 점선 테두리
            textDecoration: "none" // 텍스트에 적용된 장식(점선, 취소선) 제어: 기본 장식 제거
        }
    }

    handleClick = (id) => {
        // filter에 해당하는 조건이 true일 경우 데이터 반환
        let newTodoData = this.state
            .todoData
            .filter(data => data.id !== id)
        this.setState({todoData: newTodoData});
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        // form 안에 input 값을 전송할 때 페이지가 리로드 되는 것을 막음
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: this.state.value,
            completed: false
        };

        /**
         * 전개 연산자(...)
         * - React 상태 관리에서 새로운 배열/객체를 생성하여 기존 데이터를 수정하지 않고 새로운 값을 추가하거나 병합하는 데 사용
         * - 이는 불변성을 유지하며 코드의 가독성과 안전성을 높이는 데 유용.
         * - 따라서 하기 코드는 기존에 있는 할 일 목록에 새로운 할 일 추가하고 입력란에 있던 글씨를 지우는 행위를 함.
         */
        this.setState({
            todoData: [...this.state.todoData, newTodo],
            value: ""
        });
    }
}
