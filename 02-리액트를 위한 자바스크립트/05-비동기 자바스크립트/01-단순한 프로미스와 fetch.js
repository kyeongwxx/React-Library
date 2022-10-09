// REST API에 요청을 보내는 일은 상당히 귀찮은 일이었다. REST API로부터 간단한 데이터를 앱이 받아오려면 20줄이 넘는 코드를
// 작성해야만 했다. 그 후 fetch() 함수가 등장하면서 우리 삶이 편해졌다.

// randomuser.me API로부터 데이터를 가져와보자. 이 API에는 가짜 멤버에 대한 전자우편 주소, 이름, 전화번호, 집 주소 등의 정보가
// 들어있으며, 그런 데이터를 더미(dummy)로 활용하기 좋다. fetch는 유일한 인수로 데이터를 받아올 URL을 받는다.
console.log(fetch("https://api.randomuser.me/?nat=US&results=1"));

// 콘솔 로그를 보면 대기중인(pending) 프로미스(promise)를 볼 수 있다. 프로미스는 js에서 비동기적인 동작을 처리할 수 있게 해준다.
// 대기 중인 프로미스는 데이터가 도착하기 전의 상태를 표현한다. .then()이라는 함수를 대기 중인 프로미스에 연쇄 호출해야 한다.
// 이 함수는 콜백 함수를 인수로 받으며, 바로 앞에 있는 연산(프로미스)이 성공하면 콜백이 호출된다. 다른 말로 하면, fetch()는 데이터를
// 받아오고, then()은 데이터가 도착하면 그 데이터를 가지고 다른 일을 한다.

// 여기서 우리가 하고 싶은 일은 응답을 JSON으로 바꾸는 것이다.
console.log(
  fetch("https://api.randomuser.me/?nat=US&results=1").then((res) =>
    console.log(res.json())
  )
);

// then()은 프로미스가 정상적으로 완료되면 콜백 함수를 한 번만 호출한다. 이 콜백 함수가 반환하는 값은 그 다음에 오는 then() 함수의
// 콜백에 전달되는 인자가 된다. 따라서 성공적으로 처리된 프로미스를 처리하기 위해 then() 함수를 연쇄적으로 호출할 수 있다.
console.log(
  fetch("https://api.randomuser.me/?nat=US&results=1").then((res) =>
    res
      .json()
      .then((json) => json.result)
      .then(console.log)
      .catch(console.error)
  )
);

// 우선 fetch를 호출해 randomuser.me에 대한 GET 요청을 보낸다. 요청이 성공하면 응답 본문을 JSON으로 변환한다. 그 후 JSON
// 데이터 중에서 results를 얻는다. 그 후 콘솔에 result의 값을 출력한다. 마지막에 있는 catch 함수는 fetch가 성공하지 못한 경우
// 콜백을 호출해준다.
