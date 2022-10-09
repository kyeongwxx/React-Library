// 재귀는 자기 자신을 호출하는 함수를 만드는 기법이다. 루프를 모두 재귀로 바꿀 수 있고, 일부 루프는 재귀로 표현하는 쪽이 더 쉽다.
const countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown(value - 1, fn) : value;
};

countdown(10, (value) => console.log(value));

// countdown 함수가 약간의 시간 지연을 두고 카운트다운을 진행하게 만들 수 있다. 이렇게 변경한 버전을 사용하면 실제 1초마다
// 카운트다운을 하는 시계를 만들 수 있다.
const countdown2 = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0 ? setTimeout(() => countdown2(value - 1, fn), delay) : value;
};

const log = (value) => console.log(value);
countdown2(10, log);

// 데이터 구조를 검색할 때도 재귀가 유용하다. 어떤 폴더의 모든 하위 폴더를 찾아 가면서 파일 이름을 모두 추려내고 싶다면 재귀를 사용할 수
// 있다. HTML DOM에서 자식이 없는 엘리먼트를 찾고 싶을 때도 재귀를 쓸 수 있다. 다음 예제는 재귀를 통해 객체에 내포된 값을 찾아 낸다.
const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullName: {
        first: "Dan",
        last: "Deacon",
      },
    },
  },
};

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split(".");
  return remaining.length
    ? deepPick(remaining.join("."), object[first])
    : object[first];
};

console.log(deepPick("type", dan));
console.log(deepPick("data.info.fullName.first", dan));
