// 리액트 라이브러리에서 컴포넌트를 가져옴. 이는 컴포넌트에서 제공하는 render() 메서드를 사용하기 위함.
import React, {Component} from "react";
import "./App.css";

export default class App extends Component {
    // 함수형 컴포넌트는 없어도 되지만 클래스 컴포넌트애서는 render()를 사용해서 JSX를 반환해야하기 때문에 render() 사용
    render() {
        return (
            <div className="container">
                <div className="todoBlock">
                    Hello.
                </div>
            </div>
        )
    }
}
