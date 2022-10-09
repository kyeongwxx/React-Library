// 새로운 js 기능이 제안되고 호응을 얻으면 커뮤니티 사람들은 모든 브라우저에서 이 기능을 사용하고 싶어한다. 새로운 기능이 제대로 작동하도록
// 보장하는 유일한 방법은 브라우저에서 코드를 실행하기 전에 더 호환성이 높은 코드로 변환하는 것이다. 이런 변환을 컴파일링(compiling)이라고
// 한다. 가장 유명한 js 컴파일링 도구로는 바벨(babel)이 있다.

// js 컴파일링은 코드를 더 많은 브라우저가 이해할 수 있는 다른 버전의 js 구문으로 변환한다. 게다가 이제는 js에서도 소스 코드가 생겨났다.
// 이 말은 브라우저에서 직접 실행할 수 없는, 컴파일이 필요한 파일이 프로젝트에 들어 있는 경우도 있다는 뜻이다.

// 예를 들어 디폴트 파라미터가 지정된 화살표 함수를 살펴보자.
const add = (x = 5, y = 10) => console.log(x + y);

// 이 코드를 바벨로 변환하면 다음과 같은 코드가 생긴다.
"use strict";

var add2 = function add2() {
  var x =
    arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
  var y =
    arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

  return console.log(x + y);
};

// 바벨은 "use strict"
