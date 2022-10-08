// 자바스크립트도 이제는 구문적인 변수 영역 규칙(lexical variable scoping)을 지원한다. js에서는 중괄호({})를 사용해
// 코드 블록을 만든다. 함수의 경우 이런 코드 블록이 별도의 변수 영역을 이룬다. 하지만 if/else 문 같은 경우는 다르다.
// if/else 블록 안에서 변수를 새로 만들면, 그 변수의 영역이 해당 블록 안으로만 한정되지 않는다.
var topic = "자바스크립트";
if (topic) {
  var topic = "리액트";
  console.log("블록", topic); // 블록 리액트
}
console.log("글로벌", topic); // 글로벌 리액트

// 위 코드에서 if 블록 안의 topic 변수를 변경하면 if 블록 밖의 topic 변수 값도 변경된다.

// let 키워드를 사용하면 변수의 영역을 코드 블록 안으로 한정시킬 수 있다. let을 사용하면 블록 안에서 글로벌 변수를 보호할 수 있다.
var topic2 = "자바스크립트";
if (topic2) {
  let topic2 = "리액트";
  console.log("블록", topic2); // 블록 리액트
}
console.log("글로벌", topic2); // 글로벌 자바스크립트

// 위 코드에서 if 블록 안의 topic2를 변경해도 if 블록 바깥의 topic2에는 아무런 영향이 없다.