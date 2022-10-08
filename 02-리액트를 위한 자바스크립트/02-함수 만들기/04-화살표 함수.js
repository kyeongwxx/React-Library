// 화살표 함수를 사용하면 function 키워드 없이도 함수를 만들 수 있다. 화살표 함수에서는 return을 사용하지 않아도 식을 계산한 값이
// 자동으로 반환된다. 어떤 사람의 이름(firstName)을 인수로 받아서 지역 영주로 부르는 문자열을 반환하는 함수를 생각해보자.
const lordify = function (firstName) {
  return `켄터베리의 ${firstName}`;
};

console.log(lordify("오성원"));
console.log(lordify("오정원"));

// 화살표 함수를 사용하면 이 예제 함수를 아주 간단하게 만들 수 있다.
const lordify2 = (firstName) => `켄터베리의 ${firstName}`;

// 화살표 (=>)를 사용하면 한 줄로 모든 함수 정의를 끝낼 수 있다. function 키워드를 없애고, 화살표가 어떤 값을 반환하는지를
// 지정해주기 때문에 return도 없앴다. 다른 장점 하나는 함수가 파라미터를 단 하나만 받는 경우 파라미터 주변의 괄호를 생략해도 된다는 것이다.
// 파라미터가 2개 이상이라면 괄호가 필요하다.
const lordify3 = (firstName, land) => `${land}의 ${firstName}`;

console.log(lordify3("오성원", "브리즈번"));
console.log(lordify3("오정원", "시드니"));

// 결과를 계산하기 위해 여러 줄을 사용해야 한다면 중괄호로 함수 본문 전체를 둘러싸야 한다.
const lordify4 = (firstName, land) => {
  if (!firstName) {
    throw new Error("lordify에게 이름을 넘겨야 합니다.");
  }

  if (!land) {
    throw new Error("영주에게는 영지가 있어야 합니다.");
  }

  return `${land}의 ${firstName}`;
};

console.log(lordify4("이계영", "멜버른"));
// console.log(lordify4("오현석"))

// 객체 반환하기. 반환하려는 객체를 괄호로 둘러싸야 한다.
const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});

console.log(person("현석", "오"));

// 화살표 함수와 영역
// 일반 함수는 this를 새로 바인딩한다. 예를 들어, 다음에서 this는 gangwon 객체가 아닌 그 어떤 것이다.
const gangwon = {
  resorts: ["용펑", "평창", "강촌", "강릉", "홍천"],
  print: function (delay = 1000) {
    setTimeout(function () {
      console.log(this.resorts.join(","));
    }, delay);
  },
};

// gangwon.print(); // TypeError: Cannot read properties of undefined (reading 'join')

// 이 오류는 this.resorts의 join 메서드를 호출하려고 시도했기 때문에 발생했다. 이 경우 this를 콘솔에 찍어보면 this가
// window 객체임을 알 수 있다. 이 문제를 해결하기 위해, 화살표 함수를 사용하면 this의 영역이 제대로 유지된다.
const gangwon2 = {
  resorts: ["용펑", "평창", "강촌", "강릉", "홍천"],
  print: function (delay = 1000) {
    setTimeout(() => {
      console.log(this.resorts.join(","));
    }, delay);
  },
};

gangwon2.print();
