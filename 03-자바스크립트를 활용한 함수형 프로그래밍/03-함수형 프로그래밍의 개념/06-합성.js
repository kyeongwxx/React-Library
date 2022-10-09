// 함수형 프로그램은 로직을 구체적인 작업을 담당하는 여러 작은 순수 함수로 나눈다. 그 과정에서 언젠가는 모든 작은 함수를 한데 합칠 필요가
// 있다. 자세히 말하자면 각 함수를 서로 연쇄적으로 또는 병렬로 호출하거나 여러 작은 함수를 조합해서 더 큰 함수로 만드는 과정을 반복해서
// 전체 애플리케이션을 구축해야 한다.

// 합성의 경우 여러 다른 구현과 패턴과 기법이 있다. 여러분에게 가장 낯익은 것은 함수를 연쇄 호출하는 체이닝일 것이다. js에서는 점을
// 사용하면 이전 함수의 반환 값에 대해 다음 함수(메서드)를 적용할 수 있다.

// 문자열에는 replace 메서드가 있다.
const template = "hh:mm:ss tt";
const clockTime = template
  .replace("hh", "03")
  .replace("mm", "33")
  .replace("ss", "33")
  .replace("tt", "PM");

console.log(clockTime);
console.log(template);

// both 함수는 서로 다른 두 함수에 값을 흘려넣는 함수다.
const both = compose(civilianHours, appendAMPM);

const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed, arg));

console.log(both(new Date()));
