// ES6 명세에는 디폴트 파라미터(default parameter)가 추가됐다. 따라서 함수를 호출하면서 인자값을 지정하지 않으면 디폴트 값이 쓰인다.
// 예를 들어 디폴트 문자열을 다음과 같이 설정할 수 있다.
function logActivity(name = "오성원", activity = "테니스") {
  console.log(`${name}은 ${activity}를 좋아합니다.`);
}
console.log(logActivity());

// logActivity 함수를 호출하면서 아무 인자도 지정하지 않아도 디폴트 값을 사용해 함수가 정상적으로 실행된다.
// 문자열뿐 아니라 어떤 타입의 값이라도 디폴트 값으로 사용할 수 있다.
const defaultPerson = {
  name: {
    first: "성원",
    last: "오",
  },
  favActivity: "테니스",
};

function logActivity2(p = defaultPerson) {
  console.log(`${p.name.first}은(는) ${p.favActivity}를 좋아합니다.`);
}
console.log(logActivity2());
