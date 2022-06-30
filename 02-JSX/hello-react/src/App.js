// 2.1 코드 이해하기
import logo from './logo.svg';
import './App.css';
/*
여기서 import 구문이 사용됐습니다. 이는 특정 파일을 불러오는 것을 의미합니다. 리액트로 만든 프로젝트의 JS 파일에서는 import를 사용하여 다른 파일들을 불러와 사용할
수 있습니다.

여기서 한 가지 알아 둘 점이 있습니다. 이렇게 모듈을 불러와서 사용하는 것은 사실 원래 브라우저에는 없던 기능입니다. 브라우저가 아닌 환경에서 JS를 실행할 수 있게 해 주는
환경인 Node.js에서 지원하는 기능입니다. 참고로 Node.js에서는 import가 아닌 require라는 구문으로 패키지를 불러올 수 있습니다.

이러한 기능을 브라우저에서도 사용하기 위해 번들러(bundler)를 사용합니다. 번들(bundle)은 묶는다는 뜻입니다. 즉, 파일을 묶듯이 연결하는 것이죠. 대표적인 번들러로
웹팩, Parcel, browserify라는 도구들이 있으며, 각 도구마다 특성이 다릅니다. 리액트 프로젝트에서는 주로 웹팩을 사용하는 추세입니다. 편의성과 확장성이 다른 도구보다
뛰어나기 때문입니다. 번들러 도구를 사용하면 import(또는 require)로 모듈을 불러왔을 때 불러온 모듈을 모두 합쳐서 하나의 파일을 생성해 줍니다. 또 최적화 과정에서
여러 개의 파일로 분리될 수도 있습니다.

이 책의 프로젝트에서는 src/index.js를 시작으로 필요한 파일을 다 불러와서 번들링하게 됩니다.

2017년부터는 브라우저에서도 import 사용할 수 있게 되었지만, 이는 단순히 다른 경로에 있는 JS를 불러오는 용도로만 사용되기 때문에 프로젝트 번들링과는 다릅니다.

웹팩을 사용하면 SVG 파일과 CSS 파일도 불러와서 사용할 수 있습니다. 이렇게 파일들을 불러오는 것은 웹팩의 로더(loader)라는 기능이 담당합니다. 로더는 여러가지 종류가
있습니다. 예를 들어 css-loader는 CSS 파일을 불러올 수 있게 해 주고, file-loader는 웹 폰트나 미디어 파일 등을 불러올 수 있게 해 줍니다. 그리고 babel-loader
는 JS 파일들을 불러오면서 최신 JS 문법으로 작성된 코드를 바벨이라는 도구를 사용하여 ES5 문법으로 변환해 줍니다.
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
/*
이 코드는 App이라는 컴포넌트를 만들어 줍니다. function 키워드를 사용하여 컴포넌트를 만들었지요? 이러한 컴포넌트를 함수 컴포넌트라고 부릅니다. 프로젝트에서 컴포넌트를
렌더링하면(렌더링이란 '보여 준다'는 것을 의미합니다) 함수에서 반환하고 있는 내용을 나타냅니다. 함수에서 반환하는 내용을 보면 마치 HTML을 작성한 것 같지요? 하지만 이
코드는 HTML이 아닙니다. 그렇다고 문자열 템플릿도 아닙니다. 이런 코드는 JSX라고 부릅니다.
*/

export default App;
