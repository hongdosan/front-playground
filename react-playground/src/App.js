// 리액트 라이브러리에서 컴포넌트를 가져옴. 이는 컴포넌트에서 제공하는 render() 메서드를 사용하기 위함.
import React, {Component} from "react";
import "./App.css";

export default class App extends Component {
    btnStyle = {
        color: "#fff",
        border: "none",
        padding: "4px 7px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    getStyle = () => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted", // 속성의 하단 테두리 설정: 테두리 두깨, 색상, 점선 테두리
            textDecoration: "none" // 텍스트에 적용된 장식(점선, 취소선) 제어: 기본 장식 제거
        }
    }

    // 함수형 컴포넌트는 없어도 되지만 클래스 컴포넌트애서는 render()를 사용해서 JSX를 반환해야 하기 때문에 render() 사용
    render() {
        return (
            <div className="container">
                <div className="todoBlock">
                    <div className="title">
                        <h1>To do list</h1>
                    </div>

                    <div style={this.getStyle()}>
                        <input type="checkbox" defaultChecked={false}/>
                        React Study
                        <button style={this.btnStyle}>x</button>
                    </div>
                </div>
            </div>
        )
    }
}
