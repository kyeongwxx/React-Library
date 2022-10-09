// 데이터가 변경 불가능하다면 애플리케이션에서 어떻게 무언가를 바꿀 수 있을까? 함수형 프로그래밍은 한 데이터를 다른 데이터로 변환하는 것이
// 전부다. 함수형 프로그래밍은 함수를 사용해 원본을 변경한 복사본을 만들어낸다. 그런 식으로 순수 함수를 사용해 데이터를 변경하면
// 코드가 덜 명령형이 되고 그에 따라 복잡도도 감소한다.

// 함수형 자바스크립트를 유창하게 사용하기 위해 통달해야 하는 핵심 함수가 2개 있다. Array.map과 Array.reduce가 그것이다.

// 이번 절에서는 이 두 함수와 다른 여러 핵심 함수를 사용해 한 유형의 데이터를 다른 유형으로 어떻게 변경할 수 있는지 살펴볼 것이다.

// 고등학교 명단이 들어 있는 배열을 생각해보자.
const schools = ["Yorktown", "Washington & Lee", "Wakefield"];

// Array.join 함수를 사용하면 콤마(,)로 각 학교를 구분한 문자열을 얻을 수 있다.
console.log(schools.join(", "));

// Array.join은 js 내장 배열 메서드이다. 배열의 모든 원소를 인자로 받은 구분자로 연결한 문자열을 반환한다. 원래의 배열은
// 그대로 남는다. join은 단지 배열에 대해 다른 해석을 제공할 뿐이다. 프로그래머가 join이 제공하는 추상화를 사용하면 문자열을 실제로
// 어떻게 만드는지에 대해서는 신경 쓰지 않아도 된다.

// "W"로 시작하는 학교만 들어 있는 새로운 배열을 만들고 싶다면 Array.filter 메서드를 사용하면 된다.
const wSchools = schools.filter((school) => school[0] === "W");

console.log(wSchools);

// Array.filter는 원본 배열로부터 새로운 배열을 만들어내는 js 배열 내장 함수이다. 이 함수는 술어(predicate)를 유일한 인자로
// 받는다. 술어는 boolean 값, 즉 true나 false를 반환하는 함수를 뜻한다. Array.filter는 배열에 있는 모든 원소를 하나씩 사용해
// 이 술어를 호출한다. filter는 술어에 배열의 원소를 인자로 전달하며, 술어가 반환하는 값이 true이면 해당 원소를 새 배열에 넣는다.

// 배열에서 원소를 제거해야 할 필요가 있다면 Array.pop이나 Array.splice보다는 Array.filter를 사용하자. 이는 순수 함수다.
// 다음 예제에서 cutSchool 함수는 특정 학교의 이름을 제외한 새로운 배열을 반환한다.
const cutSchool = (cut, list) => list.filter((school) => school !== cut);

console.log(cutSchool("Washington & Lee", schools).join(", "));
console.log(schools.join("\n"));

// 함수형 프로그래밍에 꼭 필요한 다른 함수로는 Array.map이 있다. Array.map은 술어가 아니라 변환 함수를 인자로 받는다. Array.map
// 은 그 함수를 배열의 모든 원소에 적용해서 반환받은 값으로 이뤄진 새 배열을 반환한다.
const highSchools = schools.map((school) => `${school} High School`);

console.log(highSchools.join("\n"));
console.log(schools.join("\n"));

// 마지막 예제에서는 문자열의 배열에서 문자열의 배열을 만들었다. map 함수는 객체, 값, 배열, 다른 함수 등 모든 js 타입의 값으로
// 이뤄진 배열을 만들 수 있다.
const highSchools2 = schools.map((school) => ({ name: school }));

console.log(highSchools2);

// 이 예제는 문자열을 포함하는 배열로부터 객체를 포함하는 배열을 만든다.
// 배열의 원소중 하나만을 변경하는 순수 함수가 필요할 때도 map을 사용할 수 있다. 다음 예제는 원본 schools 배열을 변경하지 않으면서
// "Stratford"라는 이름의 학교를 "HB Woodlawn"으로 바꾼다.
let schools2 = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington & Lee" },
  { name: "Wakefield" },
];

const editName = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { ...item, name } : item));

let updatedSchools = editName("Stratford", "HB Woodlawn", schools2);

console.log(updatedSchools[1]);
console.log(schools2[1]);

// 방금 본 예에서는 Array.map에 전달한 변환 함수의 파라미터가 1개 뿐이었다. 하지만 실제로 Array.map은 각 원소의 인덱스를
// 변환 함수의 두 번째 인자로 넘겨준다.
const editNth = (n, name, arr) =>
  arr.map((item, i) => (i === n ? { ...item, name } : item));

let updatedSchools2 = editNth(2, "Mansfield", schools2);

console.log(updatedSchools2[2]);
console.log(schools2[2]);

// 객체를 배열로 변환하고 싶을 때는 Array.map과 Object.keys를 함께 사용하면 된다. Object.keys는 어떤 객체의 키로 이루어진
// 배열을 반환하는 메서드이다. schools3 객체를 배열로 바꾸고 싶다고 치자.
const schools3 = {
  "Yorktown": 10,
  "Washington & Lee": 2,
  "Wakefield": 5,
};

const schoolArray = Object.keys(schools3).map((key) => ({
  name: key,
  wins: schools3[key],
}));

console.log(schoolArray);

// reduce와 reduceRight 함수를 사용하면 객체를 수, 문자열, boolean 값, 객체, 심지어 함수와 같은 값으로 변환할 수 있다.
// 수로 이루어진 배열에서 최댓값을 찾을 필요가 있다고 하자. 배열을 하나의 수로 변환해야 하므로 reduce를 사용할 수 있다.
const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, value) => (value > max ? value : max), 0);

console.log("maxAge", maxAge);

// ages 배열을 한 값으로 축약(reduce)했다. 그 값은 최댓값인 64이다. reduce 함수는 변환 함수와 초기값을 인자로 받는다. 여기서
// 초기값은 0이고 처음에 그 값으로 최댓값 max를 설정한다. 변환 함수는 객체의 모든 원소에 대해 한 번씩 호출된다. 처음 변환 함수가
// 호출될 때는 age가 배열의 첫 번째 원소인 21이고 max는 초기값인 0이다. 변환 함수는 0과 21중 더 큰 값인 21을 반환한다. 이 반환값인
// 21이 다음 이터레이션 시 max 값이 된다. 각 이터레이션마다 매번 age와 max를 비교해서 더 큰 값을 반환한다. 마지막으로 배열의 마지막
// 원소를 직전 변환 함수가 반환한 max와 비교해서 더 큰 값을 최종 값으로 반환한다.

// 때로 배열을 객체로 변환해야 할 때가 있다. 다음 예제는 reduce를 사용해 값이 들어 있는 배열을 해시로 변환한다.
const colors = [
  {
    id: "xekare",
    title: "과격한 빨강",
    rating: 3,
  },
  {
    id: "jbwsof",
    title: "큰 파랑",
    rating: 2,
  },
  {
    id: "prigbj",
    title: "회색곰 회색",
    rating: 5,
  },
  {
    id: "rhybhsl",
    title: "바나나",
    rating: 1,
  },
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);

// reduce를 사용해 배열을 전혀 다른 배열로 만들 수도 있다.
const colors2 = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors2.reduce(
  (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],
  []
);

console.log(uniqueColors);
