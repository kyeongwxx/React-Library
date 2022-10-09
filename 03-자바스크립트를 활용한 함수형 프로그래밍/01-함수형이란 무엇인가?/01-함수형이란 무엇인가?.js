// js에서는 함수가 1급 시민이기 때문에, js가 함수형 프로그래밍을 지원한다고 말할 수 있다. 1급 시민이라는 말은 정수나 문자열 같은 다른
// 일반적인 값과 마찬가지로 함수를 취급할 수 있다는 뜻이다. 최신 js에는 함수형 프로그래밍 기법을 더 풍부하게 해주는 화살표 함수, 프로미스
// 스프레드 연산자 등의 개선이 추가됐다.

// js에서는 함수가 애플리케이션의 데이터를 표현할 수도 있다. 문자열이나 수, 또는 다른 모든 값과 마찬가지로 var 키워드를 사용해서
// 함수를 정의할 수 있다.
var log = function (message) {
  console.log(message);
};

log("js에서는 함수를 변수에 넣을 수 있다.");

// 화살표 함수를 사용해 같은 함수를 정의할 수 있다. 함수형 프로그래머들은 작은 함수를 아주 많이 작성하기 때문에 화살표 함수 구문을
// 사용할 수 있으면 훨씬 더 코딩이 간편해진다.
const log2 = (message) => {
  console.log(message);
};

// 함수를 변수에 넣을 수 있는 것과 마찬가지로, 함수를 객체와 배열에 넣을 수도 있다.
const obj = {
  message: "함수를 다른 값과 마찬가지로 객체에 추가할 수 있다.",
  log(message) {
    console.log(message);
  },
};

obj.log(obj.message);

const messages = [
  "함수를 배열에 넣을 수도 있다.",
  (message) => console.log(message),
  "일반적인 값과 마찬가지이다.",
  (message) => console.log(message),
];

messages[1](messages[0]);
messages[3](messages[2]);

// 다른 값들과 마찬가지로 함수를 다른 함수에 인자로 넘길 수도 있다.
const insideFn = (logger) => {
  logger("함수를 다른 함수에 인자로 넘길수도 있다.");
};

insideFn((message) => console.log(message));

// 함수가 함수를 반환할 수도 있다. 이 또한 일반적인 값과 마찬가지이다.
const createScream = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + "!!!");
  };
};

const scream = createScream((message) => console.log(message));

scream("함수가 함수를 반환할 수도 있습니다.");
scream("createScream은 함수를 반환합니다.");
scream("scream은 createScream이 반환한 함수를 가리킵니다.");

// 마지막 두 예제, 즉 함수가 함수를 인자로 받는 경우와 함수가 함수를 반환하는 경우를 고차함수라고 부른다. createScream 고차 함수를
// 화살표 함수로 표현할 수도 있다.
const createScream2 = (logger) => (message) => {
  logger(message.toUpperCase() + "!!!");
};

createScream2((message) => console.log(message))("createScream2");
