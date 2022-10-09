// 스프레드 연산자(spread operator)는 3개의 점(...)으로 이뤄진 연산자로 몇 가지 다른 역할을 담당한다.
// 첫째로 스프레드 연산자를 사용해 배열의 내용을 조합할 수 있다. 예를 들어 두 배열이 있다면, 두 배열의 모든 원소가 들어간 세 번째 배열을
// 만들 수 있다.
const peaks = ["대청봉", "중청봉", "소청봉"];
const canyons = ["천불동계곡", "가야동계곡"];
const seoraksan = [...peaks, ...canyons];

console.log(seoraksan);

// peaks와 canyons에 포함된 모든 원소가 seoraksan이라는 새 배열에 들어간다.

// 이제 스프레드 연산자가 해결해주는 문제를 한 가지 살펴보자. 앞의 예제에서 정의한 peaks 배열에서 마지막 원소를 변수에 담고 싶다.
// Array.reverse 메서드를 사용해 배열을 뒤집고 구조 분해를 사용해 첫 번째 원소를 변수에 넣으면 될 것 같다.
const [last] = peaks.reverse();

console.log(last);
console.log(peaks.join(", "));

// 문제점이 보이는가? 실제로 reverse 메서드는 원래의 배열을 변경한다. 하지만 스프레드 연산을 사용하면 원본 배열을 뒤집지 않고
// 복사본을 만들어서 뒤집을 수 있다.
const peaks2 = ["대청봉", "중청봉", "소청봉"];
const [last2] = [...peaks2].reverse();

console.log(last2);
console.log(peaks2.join(", "));

// 스프레드 연산자를 사용해 배열의 원소들을 복사했기 때문에, 원본인 peaks는 변경되지 않고 그대로 남게 된다. 따라서 나중에 필요할 때
// 다시 사용할 수 있다.

// 또한 스프레드 연산자를 사용해 배열의 나머지 원소들을 얻을 수도 있다.
const lakes = ["경포호", "화진포", "송지호", "청초호"];
const [first, ...rest] = lakes;

console.log(rest.join(", "));

// 세 점(...) 구문을 사용해 함수의 인자를 배열로 모을 수도 있다. 이런 식으로 함수 파라미터 정의에서 스프레드 연산자가 쓰일 때는
// 레스트 파라미터(rest parameter)라고 부른다. 다음 예제에서는 n개의 인자를 스프레드 연산자를 사용해 배열로 모은 다음에, 그 배열을
// 사용해 여러 가지 내용을 콘솔 메시지로 찍는 함수를 보여준다.
function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();

  console.log(`${args.length} 도시를 운행합니다.`);
  console.log(`${start}에서 출발합니다.`);
  console.log(`목적지는 ${finish}입니다.`);
  console.log(`중간에 ${stops.length} 군데를 들립니다.`);
}

console.log(directions("서울", "수원", "천안", "대전", "대구", "부산"));
// direction 함수는 스프레드 연산자를 사용해 인자를 받는다. 첫 번째 인자는 start 변수에 대입된다. 마지막 인자는 finish 변수에
// Array.reverse를 통해 대입된다. 그 후 args 배열의 length를 사용해서 얼마나 많은 도시를 지나는지를 보여준다. 목적지에 가는 동안
// 들러야 하는 도시의 수는 args 배열에서 2(출발지와 도착지)를 뺀 것이다. direction 함수에 임의의 개수의 경유 도시를 넘길 수 있기
// 때문에 이런 기능은 매우 편리하다.

// 스프레드 연산자를 객체에도 사용할 수 있다. 다음 예제에서는 두 배열을 세 번째 배열로 합쳤던 과정과 같은 것을 배열 대신 객체를 사용해
// 수행한다.
const morning = {
  breakfast: "미역국",
  lunch: "삼치구이와 보리밥",
};

const dinner = "스테이크 정식";

const backpackingMeals = {
  ...morning,
  dinner,
};

console.log(backpackingMeals);
