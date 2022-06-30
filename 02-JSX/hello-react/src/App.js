// function App() {
//   return (
//     <h1>리액트 안녕!</h1>
//     <h2>잘 작동하니?</h2>
//   )
// }

// export default App;

// 2.4.1 감싸인 요소

/*
컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 합니다. 따라서 위와 같은 형태의 코드는 제대로 작동하지 않습니다. 요소 여러 개가 부모 요소 하나에 의하여
감싸져 있지 않기 때문에 오류가 발생했습니다. 이 오류는 다음과 같이 코드를 작성하여 해결할 수 있습니다.
*/

// function App() {
//   return (
//     <div>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </div>
//   );
// }

// export default App;

/*
리액트 컴포넌트에서 요소 여러 개를 왜 하나의 요소로 꼭 감싸 주어야 할까요? 그것은 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록
컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문입니다.

그런데 여기서 꼭 div 요소를 사용하고 싶지 않을 수도 있습니다. 그런 경우에는 리액트 v16 이상부터 도입된 Fragment라는 기능을 사용하면 됩니다.
*/

// import { Fragment } from 'react';

// function App() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니??</h2>
//     </Fragment>
//   );
// }

// export default App;

// 코드 상단 import 구문에서 react 모듈에 들어 있는 Fragment라는 컴포넌트를 추가로 불러옵니다. Fragment는 다음과 같은 형태로도 표현할 수 있습니다.

// function App() {
//   return (
//     <>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </>
//   );
// }

// export default App;

// 2.4.2 자바스크립트 표현

/*
JSX가 단순히 DOM 요소를 렌더링하는 기능밖에 없었다면 뭔가 좀 아쉬웠을 겁니다. JSX 안에서는 JS 표현식을 쓸 수 있습니다. JS 표현식을 작성하려면 JSX 내부에서
코드를 { }로 감싸면 됩니다. JS 값을 JSX 안에서 한번 렌더링해 봅시다.
*/

// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <h1>{name} 안녕!</h1>
//       <h2>잘 작동하니??</h2>
//     </>
//   );
// }

// export default App;

// 2.4.3 if 문 대신 조건부 연산자

/*
JSX 내부의 JS 표현식에서 if 문을 사용할 수는 없습니다. 하지만 조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나,
{ } 안에 조건부 연산자를 사용하면 됩니다. 조건부 연산자의 또 다른 이름은 삼항 연산자입니다. 이 연산자를 한번 사용해 볼까요? 
 */

// function App() {
//   const name = '리액트'
//   return (
//     <>
//       {name === '리액트' ? (
//         <h1>리액트입니다.</h1>
//       ) : (
//         <h2>리액트가 아닙니다.</h2>
//       )}
//     </>
//   );
// }

// export default App

// 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링

/*
조건부 연산자보다 더 짧은 코드로 똑같은 작업을 할 수 있습니다. 다음과 같이 && 연산자를 사용해서 조건부 렌더링을 할 수 있습니다.

&& 연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문입니다. 여기서 한 가지 주의해야
할 점이 있는데요, falsy한 값인 0은 예외적으로 화면에 나타난다는 것입니다.
*/

// function App() {
//   const name = '리액트'
//   return (
//     <>
//       {name === '리액트' && <h1>리액트입니다.</h1>}
//     </>
//   )
// }

// export default App

// 2.4.5 undefined를 렌더링하지 않기

/*
리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안 됩니다. 어떤 값이 undefined일 수도 있다면, OR(||) 연산자를 사용하면
해당 값이 undefined일 때 사용할 값을 지정할 수 있으므로 간단하게 오류를 방지할 수 있습니다.

반면 JSX 내부에서 undefined를 렌더링하는 것은 괜찮습니다. 
*/

// import './App.css';

// function App() {
//   const name = undefined
//   return <>{name || '리액트'}</>
// }

// export default App

// 2.4.6 인라인 스타일링

/*
리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어 주어야 합니다. 스타일 이름 중에서 background-color처럼 - 문자가
포함되는 이름이 있는데요, 이러한 이름은 - 문자를 없애고 camelCase로 작성해야 합니다. 따라서 background-color는 backgroundColor로 작성합니다.
*/

// function App() {
//   const name = 'React-Library'
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: '48px',
//     fontWeight: 'bold',
//     padding: '16px'
//   }

//   return <div style={style}>
//           {name}
//         </div>
// }

// export default App

// 2.4.7 class 대신 className

// JSX에서는 class가 아닌 className으로 설정해 주어야 합니다.

// import './App.css'

// function App() {
//   const name = 'React-Library'
//   return <div className='react'>{name}</div>
// }

// export default App

// 2.4.8 꼭 닫아야 하는 태그

/*
HTML 코드를 작성할 때 가끔 태그를 닫지 않은 상태로 코드를 작성하기도 합니다. 예를 들면 input HTML 요소는 <input></input>이라 입력하지 않고 <input>이라고만
입력해도 작동합니다. 하지만 JSX에서는 위 코드처럼 태그를 닫지 않으면 오류가 발생합니다. 이 오류를 해결하려면 input 태그를 닫아주어야 합니다.

또한 태그 사이에 별도의 내용이 들어가지 않는 경우에는 다음과 같이 작성할 수도 있습니다. 이러한 태그를 self-closing 태그라고 부릅니다.
 */

// import './App.css'

// function App() {
//   const name = '리액트 라이브러리'
//   return (
//     <>
//       <div className='react'>{name}</div>
//       <input/>
//     </>
//   )
// }

// export default App

// 2.4.9 주석

// JSX 내부에서 주석을 작성할 때는 {/* ... */}와 같은 형식으로 작성합니다. 이렇게 여러 줄로 작성할 수도 있습니다.
// 그리고 시작 태그를 여러 줄로 작성할 때는 그 내부에서 // ... 와 같은 형태의 주석도 작성할 수 있습니다.

import './App.css'

function App() {
  const name = '리액트 라이브러리'
  return (
    <>
      {/* 주석은 이렇게 작성합니다. */}
      <div
        className='react' // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      > 
        {name}
      </div>
      // 하지만 이런 주석이나
      /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
    </>
  )
}

export default App