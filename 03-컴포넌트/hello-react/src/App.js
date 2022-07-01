// import './App.css'

// function App() {
//   const name = '리액트'
//   return <div className="react">{name}</div>
// }

// export default App

/**
 * 2장에서 보았던 App 컴포넌트는 함수 컴포넌트이며, 코드가 위와 같은 구조로 이루어져 있습니다.
 * 
 * 컴포넌트를 선언하는 방식은 두 가지입니다. 하나는 함수형 컴포넌트이고, 또 다른 하나는 클래스형 컴포넌트입니다.
 * 클래스형 컴포넌트가 어떻게 이루어졌는지 확인해 볼까요? 
 */

// import { Component } from 'react'

// class App extends Component {
//   render() {
//     const name = '리액트'
//     return <div className='react'>{name}</div>
//   }
// }

// export default App

/**
 * 클래스형 컴포넌트로 바뀌었지만 역할은 이전에 보았던 함수형 컴포넌트와 똑같습니다. 클래스형 컴포넌트와 함수 컴포넌트의 차이점은 클래스형 컴포넌트의 경우 이후 배울
 * state 기능 및 라이프사이클 기능을 사용할 수 있다는 것과 임의 메서드를 정의할 수 있다는 것입니다.
 * 
 * 클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 합니다. 컴포넌트를 선언할 수 있는 두 가지 방법 중 어느 상황에
 * 함수 컴포넌트를 사용해야 할까요?
 * 
 * 함수 컴포넌트의 장점을 나열해 보면 다음과 같습니다. 우선 클래스형 컴포넌트보다 선언하기가 훨씬 편합니다. 메모리 자원도 클래스형 컴포넌트보다 덜 사용합니다. 또한,
 * 프로젝트를 완성하여 빌드한 후 배포할 때도 함수 컴포넌트를 사용하는 것이 결과물의 파일 크기가 더 작습니다.
 * 
 * 함수 컴포넌트의 주요 단점은 state와 라이프사이클 API의 사용이 불가능하다는 점인데요, 이 단점은 리액트 v16.8 업데이트 이후 Hooks라는 기능이 도입되면서
 * 해결되었습니다. 완전히 클래스형 컴포넌트와 똑같이 사용할 수 있는 것은 아니지만 조금 다른 방식으로 비슷한 작업을 할 수 있게 되었습니다. 이번 장에서 Hooks에 대한
 * 내용은 맛보기로만 조금 배워 보고, 8장에서 더 자세히 다루겠습니다.
 * 
 * 리액트 공식 매뉴얼에서는 컴포넌트를 새로 작성할 때 함수 컴포넌트와 Hooks를 사용하도록 권장하고 있습니다. 하지만 그렇다고 해서 클래스형 컴포넌트가 사라지는 것은
 * 아니므로 클래스형 컴포넌트의 기능은 꼭 알아 두어야 합니다.
 * 
 * 이 책의 경우 초반부에서는 기능을 구현할 때 클래스형 컴포넌트 위주로 사용하여 리액트의 기본기를 익히고, 후반부에서는 Hooks를 완벽히 이해한 후 함수 컴포넌트와
 * Hooks를 기반으로 컴포넌트를 작성합니다
 */

//  import MyComponent from './MyComponent';

//  const App = () => {
//      return <MyComponent/>
//  };
 
//  export default App;

// 3.2.3.2 모듈 불러오기(import)
// 위 코드에서 import 구문을 사용하는 두 번째 줄은 우리가 만든 MyComponent 컴포넌트를 불러옵니다.

// 3.3 props

/**
 * props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소입니다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(현 상황에서는
 * App 컴포넌트가 부모 컴포넌트입니다)에서 설정할 수 있습니다.
 */

// 3.3.2 컴포넌트를 사용할 때 props 값 지정하기

/**
 * App 컴포넌트에서 MyComponent의 props 값을 지정해 보겠습니다. App.js의 코드를 다음과 같이 수정해 보세요.
 */

// import MyComponent from './MyComponent'

// const App = () => {
//     return <MyComponent name='React'/>
// }

// export default App

// 3.3.4 태그 사이의 내용을 보여주는 children

/**
 * 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여주는 props가 있는데요, 바로 children입니다. App 컴포넌트를 다음과 같이 한번 수정해 보세요.
 */

import MyComponent from './MyComponent'

const App = () => {
    return <MyComponent name='react' favoriteNumber={1}>
            리액트
           </MyComponent>
}

export default App