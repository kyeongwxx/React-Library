// <!-- 3.2 첫 컴포넌트 생성 -->

// 3.2.1 src 디렉터리에 MyComponent.js 파일 생성

// 3.2.2 코드 작성하기

// const MyComponent = () => {
//     return <div>나의 새롭고 멋진 컴포넌트</div>
// }

// 3.2.3.1 모듈 내보내기(export)
// 이 코드는 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정합니다.
// export default MyComponent

// 3.3.1 JSX 내부에서 props 렌더링

/**
 * 우선 MyComponent 컴포넌트를 수정하여 해당 컴포넌트에서 name이라는 props를 렌더링하도록 설정해 봅시다. props 값은 컴포넌트 함수의 파라미터로 받아 와서
 * 사용할 수 있습니다. props를 렌더링 할 때 2장에서 배웠던 것처럼 JSX 내부에서 { } 기호로 감싸 주면 됩니다.
 */

// const MyComponent = props => {
//     return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>
// }

// export default MyComponent

// 3.3.3 props 기본값 설정: defaultProps

/**
 * 부모 컴포넌트에서 props 값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정하는 defaultProps에 대해 알아 봅시다. 이 값을 설정하는 방법은 다음과 같습니다. 
 */

// const MyComponent = (props) => {
//     return <div>안녕하세요, 제 이름은 {props.name}입니다!!</div>
// }

// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

// export default MyComponent

// 3.3.4 태그 사이의 내용을 보여주는 children

/**
 * 부모 컴포넌트에서 MyComponent 태그 사이에 작성한 리액트라는 문자열을 MyComponent 내부에서 보여 주려면 props.children 값을 보여 주어야 합니다.
 * MyComponent를 다음과 같이 수정해 보세요.
 */

// const MyComponent = (props) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {props.name}입니다. <br/>
//             children 값은 {props.children}
//             입니다.
//         </div>
//     )
// }

// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

// export default MyComponent

// 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기

/**
 * 현재 MyComponent에서 props 값을 조회할 때마다 props.name, props.children과 같이 props.이라는 키워드를 앞에 붙여 주고 있습니다. 이러한 작업을
 * 더 편하게 하기 위해 ES6의 비구조화 할당 문법을 사용하여 내부 값을 바로 추출하는 방법을 알아보겠습니다. MyComponent를 다음과 같이 수정해 보세요.
 */

// const MyComponent = (props) => {
//     const { name, children } = props
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br/>
//             children 값은 {children}입니다.
//         </div>
//     )
// }

// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

// export default MyComponent

/**
 * 이렇게 코드를 작성하면 name 값과 children 값을 더 짧은 코드로 사용할 수 있습니다.
 * 
 * 방금 사용한, 객체에서 값을 추출하는 문법을 비구조화 할당(destructuring assignment)이라고 부릅니다. 이 문법은 구조 분해 문법이라고도 불리며, 함수의
 * 파라미터 부분에서도 사용할 수 있습니다. 만약 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용하는 것이죠. 코드를 다음과 같이 수정해 보세요.
 */

// const MyComponent = (name, children) => {
//     return (
//         <div>
//             Hello! 내 이름은 {name}입니다.<br/>
//             children 값은 {children}입니다.
//         </div>
//     )
// }

// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

// export default MyComponent

/**
 * 어떤가요? 이렇게 props를 사용하면 훨씬 편하지요? 이 책에서는 앞으로 함수 컴포넌트에서 props를 사용할 때 이렇게 파라미터 부분에서 비구조화 할당 문법을 사용합니다.
 */

// 3.3.6 propTypes를 통한 props 검증

/**
 * 컴포넌트의 필수 props를 지정하거나 props의 타입(type)을 지정할 때는 propTypes를 사용합니다. 컴포넌트의 propTypes를 지정하는 방법은 defaultProps을
 * 설정하는 것과 비슷합니다. 우선 propTypes를 사용하려면 코드 상단에 import 구문을 사용하여 불러와야 합니다. PropTypes를 불러왔다면 코드 하단에 다음과 같이
 * 입력해 보세요.
 */

// import PropTypes from 'prop-types'

// const MyComponent = ({ name, children }) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다.<br/>
//             children 값은 {children}입니다.
//         </div>
//     )
// }

// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

// MyComponent.propTypes = {
//     name : PropTypes.string
// }

// export default MyComponent

/**
 * 이렇게 설정해 주면 name 값은 무조건 문자열(string) 형태로 전달해야 된다는 것을 의미합니다.
 */

// 3.3.6.1 isRequired를 사용하여 필수 propTypes 설정

/**
 * propsTypes를 지정하지 않았을 때 경고 메시지를 띄워 주는 작업을 해 봅시다. propTypes를 지정할 때 뒤에 isRequired를 붙여 주면 됩니다. 이번에는
 * favoriteNumber라는 숫자를 필수 props로 지정해 보겠습니다.
 */

// import PropTypes from 'prop-types'

// const MyComponent = ({ name, favoriteNumber, children }) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다.<br/>
//             children 값은 {children}입니다.<br/>
//             좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//     )
// }

// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// }

// export default MyComponent

// 3.3.6.2 더 많은 PropTypes 종류

/**
 * array: 배열
 * arrayOf(다른 PropType): 특정 PropType으로 이루어진 배열을 의미합니다. 예를 들어 arrayOf(PropType.number)는 숫자로 이루어진 배열입니다.
 * bool: true 혹은 false 값
 * func: 함수
 * number: 숫자
 * object: 객체
 * string: 문자열
 * symbol: ES6의 Symbol
 * node: 렌더링할 수 있는 모든 것(숫자, 문자열, 혹은 JSX 코드, children도 node PropType입니다.)
 * instanceOf(클래스): 특정 클래스의 인스턴스(예: instanceOf(MyClass))
 * oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
 * oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나
 * objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
 * shape({ name: PropTypes.string, num: PropTypes.number }): 주어진 스키마를 가진 객체
 * any: 아무 종류
 */

// 3.3.7 클래스형 컴포넌트에서 props 사용하기

/**
 * 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 됩니다. 그리고 defaultProps와 propTypes는 똑같은 방식으로
 * 설정할 수 있습니다. MyComponent를 다음과 같이 클래스형 컴포넌트로 변환해 보세요.
 */

// import { Component } from 'react'
// import PropTypes from 'prop-types'

// class MyComponent extends Component {
//     render() {
//         const { name, favoriteNumber, children } = this.props // 비구조화 할당
//         return (
//             <div>
//                 안녕하세요, 제 이름은 {name}입니다.<br/>
//                 children 값은 {children}입니다.<br/>
//                 좋아하는 숫자는 {favoriteNumber}입니다.
//             </div>
//         )
//     }
// }

// MyComponent.defaultProps = {
//     name: '기본 이름',
//     children: '기본 텍스트',
//     favoriteNumber: '기본 숫자'
// }

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     children: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// }

// export default MyComponent

/**
 * 클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 static을 사용하여 지정하는 방법도 있습니다.
 */

import { Component } from 'react'
import PropTypes from 'prop-types'

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름',
        children: '기본 텍스트',
        favoriteNumber: '기본 숫자'
    }
    
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }
    render() {
        const { name, favoriteNumber, children} = this.props
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다.<br/>
                children 값은 {children}입니다.<br/>
                좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        )
    }
}

export default MyComponent