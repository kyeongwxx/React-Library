// 함수형 프로그래밍은 선언적 프로그래밍(declarative programming)이라는 더 넓은 프로그래밍 패러다임의 한 가지이다.
// 선언적 프로그래밍은 필요한 것을 달성하는 과정을 하나하나 기술하는 것보다 필요한 것이 어떤 것인지를 기술하는 것에 더 방점을 두고
// 애플리케이션의 구조를 세워나가는 프로그래밍 스타일이다.

// 선언적 프로그래밍을 이해하기 위해 명령형 프로그래밍(imperative programming)과 비교. 명령형 프로그래밍은 코드로 원하는 결과를
// 달성해 나가는 과정에만 관심을 두는 프로그래밍 스타일이다. 어떤 문자열을 URL에서 사용할 수 있게 만드는 일반적인 작업을 살펴보자.
// 공백은 URL에서 사용할 수 있는 문자가 아니므로, 문자열을 URL에서 사용할 수 있게 만들려면 모든 공백을 하이픈(-)으로 바꾸면 된다고 하자.
const string = "Restaurants in Hanalei";
let urlFriendly = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}

console.log(urlFriendly);

// 이 예제는 문자열의 모든 문자에 대해 루프를 돌면서 공백이 발생할 때마다 그 공백을 -로 바꾼다. 이런 구조의 프로그램은 우리가 원하는 것을
// 달성하는 방법에만 신경을 쓴다. for 루프와 if 문을 사용하고 대입 연산자(+=)를 사용해 값을 설정한다. 이 코드 자체를 간단히 살펴보는
// 것만으로는 우리가 즉시 알 수 있는 점이 많지 않다. 명령형 프로그램에서는 코드 안에서 어떤 일이 벌어지는지 코드를 읽는 사람이 더 잘
// 이해할 수 있게 돕기 위해 주석을 많이 달 필요가 있다.

// 이제 같은 문제를 선언적으로 푸는 것을 보자.
const string2 = "Restaurants in Hanalei";
let urlFriendly2 = string.replace(/ /g, "-");

console.log(urlFriendly2);

// 여기서는 string.replace와 정규식을 사용해서 모든 공백을 하이픈으로 바꾼다. string.replace를 사용하면 모든 공백이 하이픈으로
// 변경되어야 한다는 사실을 묘사할 수 있다. 모든 공백을 하이픈으로 바꾸는 자세한 방법은 replace 함수안에 들어가고, 구체적 절차 대신
// replace라는 함수를 사용해 추상적인 개념을 표현한다. 선언적 프로그래밍의 코드 구문은 어떠 ㄴ일이 발생해야 하는지에 대해 기술하고,
// 실제로 그 작업을 처리하는 방법은 추상화를 통해 아랫단에 감춰진다.

const { render } = ReactDOM;

const Welcome = () => {
  <div id="welcome">
    <h1>Hello World</h1>
  </div>;
};

render(<Welcome />, document.getElementById("target"));

// 리액트는 선언적이다. 여기서 Welcome 컴포넌트는 렌더링 할 DOM에 대해 기술한다. render 함수는 컴포넌트에 있는 지시에 따라
// DOM을 만든다. 이 과정에서 실제 DOM이 어떻게 만들어져야 하는지에 대한 내용은 추상화를 통해 사라진다. 이 코드를 보면 Welcome
// 컴포넌트를 target이라는 ID를 가지는 엘리먼트 안에 렌더링하고 싶어 한다는 프로그래머의 의도가 더 명확히 드러난다.
