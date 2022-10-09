// 함수형 프로그래밍에서는 고차 함수가 꼭 필요하다. 고차 함수는 다른 함수를 조작할 수 있는 함수다. 고차 함수는 다른 함수를 인자로
// 받을 수 있거나 함수를 반환할 수 있고, 때로는 2가지를 모두 수행한다.

// 고차 함수를 구현하는 방법을 살펴보자. 다음 예제에서 invokeIf 함수는 조건을 검사해서 조건이 참인 경우 fnTrue 함수를, 조건이
// 거짓인 경우 fnFalse 함수를 호출한다.
const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!!!");

const showUnauthorized = () => console.log("Unauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);

// invokeIf는 참인 경우와 거짓인 경우에 대한 함수를 인자로 받는다. 방금 본 예제에서는 showWelcome과 showUnauthorized를
// invokeIf에게 넘겼다.

// 다른 함수를 반환하는 고차 함수는 js에서 비동기적인 실행 맥락을 처리할 때 유용하다. 함수를 반환하는 고차 함수를 쓰면 필요할 때
// 재활용할 수 있는 함수를 만들 수 있다.

// 커링(currying)은 고차 함수 사용법과 관련한 함수형 프로그래밍 기법이다. 커링은 어떤 연산을 수행할 때 필요한 값 중 일부를 저장하고
// 나중에 나머지 값을 전달받는 기법이다. 이를 위해 다른 함수를 반환하는 함수를 사용하며, 이를 커링된 함수라고 부른다.

// 다음은 커링 예제다. userLogs는 일부 정보(사용자 이름)를 받아서 함수를 반환한다. 나머지 정보(메세지)가 사용 가능해지면 userLogs가
// 반환한 함수를 활용할 수 있다. 이 예제에서는 연관된 사용자 이름 정보 뒤에 로그 메세지를 덧붙인다.
const userLogs = (userName) => (message) =>
  console.log(`${userName} -> ${message}`);

const log = userLogs("grandpa23");

log("attempted to load 20 fake members");

// userLogs는 고차 함수다. userLogs를 호출해 만들어지는 log 함수를 호출할 때마다 메시지 맨 앞에 'grandpa23'이 덧붙여진다.