// 함수를 만드는 다른 방법으로는 함수 표현식(function expression)이 있다. 함수 표현식은 이름 없는 함수를 만들며,
// 변수에 값을 대입할 수 있다.
const logCompliment = function () {
  console.log("잘했어요!");
};

logCompliment();

// 함수 선언과 함수 표현식 중 어떤 쪽을 사용할지 결정할 때 알아둬야 할 내용으로는 함수 선언은 호이스팅되지만 함수 표현식은
// 그렇지 않다는 점을 들 수 있다. 즉, 함수 선언을 작성하기 전에 함수를 호출해도 된다. 하지만 함수 표현식에 의해 만들어진
// 함수를 함수 표현식이 실행되기 전에 호출할 수는 없다.

// 선언 전 호출
hey();

// 함수 선언
function hey() {
  console.log("hey!");
}
// 이 코드는 제대로 작동한다. 함수가 호이스팅, 즉 함수가 파일의 맨 앞에 정의된 것처럼 처리되기 때문이다. 같은 방식을
// 함수 표현식에 대해 적용하면 오류가 발생한다.

// 선언 전 호출
hi(); // ReferenceError: Cannot access 'hi' before initialization

// 함수 표현식
const hi = function () {
  console.log("hi!");
};

// 인수 넘기기
// logComplement 함수는 아무 인수(argument)나 파라미터(parameter)를 받지 않는다. 함수가 사용한느 변수에 대해
// 동적으로 값을 제공받고 싶다면, 함수 이름 뒤의 괄호 안에 파라미터 이름을 추가해서 함수를 선언하면 된다.
const logComplement2 = function (firstName) {
  console.log(`잘했어요, ${firstName}`);
};

logComplement2("현석");

// 코드에 message라는 다른 인수를 추가할 수도 있다.
const logComplement3 = function (firstName, message) {
  console.log(`${firstName}: ${message}`);
};

logComplement3("현석", "아주 멋져요");

// 값 반환하기
// 현재 logCompliment 함수는 값을 콘솔에 남기지만, 실제로는 값을 돌려받기 위해 함수를 호출하는 경우가 더 흔하다.
// 함수에 return 문을 추가하자. return 문은 함수가 반환할 값을 지정해준다.
const createCompliment = function (firstName, message) {
  return `${firstName}: ${message}`;
};

console.log(createCompliment("현석", "아주 멋져요"));
