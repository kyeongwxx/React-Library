// 순수 함수(Pure Functions)는 파라미터에 의해서만 반환값이 결정되는 함수를 뜻한다. 순수 함수는 최소한 하나 이상의 인수를 받고,
// 인자가 같으면 항상 같은 값이나 함수를 반환한다. 순수 함수에는 부수 효과가 없다. 부수 효과란 전역 변수를 설정하거나, 함수 내부나
// 애플리케이션에 있는 다른 상태를 변경하는 것을 말한다. 순수 함수는 인수를 변경 불가능한 데이터로 취급한다.

// 순수 함수를 이해하기 위해 비순수 함수를 먼저 하나 살펴보자.
const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
  return frederick;
}

selfEducate();
console.log(frederick);

// selfEducate() 함수는 순수하지 않다. 이 함수는 인자를 취하지 않으며, 값을 반환하거나 함수를 반환하지도 않는다. 또한 자신의 영역
// 밖에 있는 frederick 이라는 변수를 바꾸기까지 한다. selfEducate() 함수가 호출되면 전역의 일부분이 된다. 즉, 함수 호출에 따른
// 부수 효과가 발생한다.

// 이제 selfEducate()가 파라미터를 받게 만들자.
const frederick2 = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

const selfEducate2 = (person) => {
  person.canRead = true;
  person.canWrite = true;
  return person;
};

console.log(selfEducate2(frederick2));
console.log(frederick2);

// 파라미터를 받기는 하지만, 이 selfEducate2() 함수도 순수하지 않다. 이 함수에도 부수 효과가 있기 때문이다. 이 함수를 호출하면
// 인수로 넘긴 객체의 필드가 바뀐다. 이 함수에 전달된 객체를 불변 데이터로 취급한다면 순수 함수를 얻을 수 있을 것이다.
const frederick3 = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

const selfEducate3 = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});

console.log(selfEducate3(frederick3));
console.log(frederick3);

// 마침내 selfEducate3()이 순수 함수가 됐다. 이 함수는 전달받은 인자 person으로부터 새로운 값을 계산한다. 새 값을 계산할 때
// 전달받은 인자를 변경하지 않고 새로 만든 객체를 반환한다. 따라서 이 함수에는 부수 효과가 없다.

// DOM을 변경하는 순수하지 않은 함수를 살펴보자
function Header(text) {
  let h1 = document.createElement("h1");
  h1.innerText = text;
  document.body.appendChild(h1);
}

Header("Header() caused side effects");

// 이 함수는 함수나 값을 반환하지 않으며 DOM을 변경하는 부수 효과를 발생시킨다.

// 리액트에서는 UI를 순수 함수로 표현한다. 이 함수는 DOM을 변경하는 부수 효과를 발생시키지 않고 엘리먼트를 반환한다. 이 함수는
// 엘리먼트를 만드는 일만 책임지며, DOM을 변경하는 책임은 애플리케이션의 다른 부분이 담당해야 한다.
const Header = (props) => <h1>{props.title}</h1>;

// 1. 순수 함수는 파라미터를 최소 하나 이상 받아야 한다.
// 2. 순수 함수는 값이나 다른 함수를 반환해야 한다.
// 3. 순수 함수는 인자나 함수 밖에 있는 다른 변수를 변경하거나, 입출력을 수행해서는 안된다.