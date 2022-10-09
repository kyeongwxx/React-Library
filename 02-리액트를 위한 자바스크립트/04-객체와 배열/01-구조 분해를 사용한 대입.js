// 구조 분해를 사용하면 객체 안에 있는 필드 값을 원하는 변수에 대입할 수 있다. 다음 sandwich 객체를 생각해보자.
// sandwich에는 4개의 필드가 있다. 하지만 그중에서 bread와 meat 필드의 값이 필요햐다.
const sandwich = {
  bread: "더치 크런치",
  meat: "참치",
  cheese: "스위스",
  toppings: ["상추", "토마토", "머스타드"],
};

let { bread, meat } = sandwich;

console.log(bread, meat);

// 이 코드는 sandwich를 분해해서 bread와 meat 필드를 같은 이름의 변수에 넣어준다. 두 변수의 값은 sandwich에 있는 같은 이름의
// 필드값으로 초기화되지만, 두 변수를 변경해도 원래의 필드 값이 바뀌지 않는다.
bread = "마늘";
meat = "칠면조";

console.log(bread);
console.log(meat);

console.log(sandwich.bread, sandwich.meat);

// 객체를 분해해서 함수의 인자로 넘길 수도 있다. 어떤 사람의 이름을 캔터베리의 영주처럼 표현해주는 함수를 생각해보자.
const lordify = (regularPerson) => {
  console.log(`캔터베리의 ${regularPerson.firstName}`);
};

const regularPerson = {
  firstName: "현석",
  lastName: "오",
};

lordify(regularPerson);

// 객체의 필드에 접근하기 위해 점(.)과 필드 이름을 사용하는 대신, regularPerson에서 필요한 값을 구조 분해로 가져올 수 있다.
const lordify2 = ({ firstName }) => {
  console.log(`캔터베리의 ${firstName}`);
};

const regularPerson2 = {
  firstName: "현석",
  lastName: "오",
};

lordify2(regularPerson2);

// 데이터를 변경하고 이에 맞춰 한 수준 더 깊이 들어가보자. 이제는 regularPerson2 객체 안에 spouse를 키로 하는 새로운 객체를
// 포함시킨다.
const regularPerson3 = {
  firstName: "현석",
  lastName: "오",
  spouse: {
    firstName: "계영",
    lastName: "이",
  },
};

// 배우자의 이름도 켄터베리의 영주로 만들고 싶다면 콜론과 내포된 중괄호를 사용해 firstName을 spouse 객체로부터 구조 분해할 수 있다.
const lordify3 = ({ spouse: { firstName } }) => {
  console.log(`켄터베리의 ${firstName}`);
};

lordify3(regularPerson3);
