// 비동기 요청을 하면 발생할 수 있는 경우는 2가지이다. 즉 모든 일이 원하는 대로 잘 풀리거나, 오류가 생길 수 있다는 말.
// 요청 성공이나 실패에는 다양한 유형이 있다. 예를 들어 성공할 떄까지 여러 번 다른 방법으로 데이터를 가져오려고 시도할 수 있다.
// 또 여러 유형의 오류를 받을 수도 있다. 프로미스를 사용하면 간단하게 비동기 작업의 성공이나 실패를 돌려줄 수 있다.

// getPeople 함수는 새로운 프로미스를 반환한다. 프로미스는 API에 요청을 보낸다. 프로미스가 성공하면 데이터를 읽어온다.
// 프로미스가 성공하지 않으면 오류를 발생시킨다.
const getPeople = (count) => {
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : rejects(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
  });
};

// 위 코드로 프로미스가 만들어진다. 하지만 아직 프로미스를 사용하지는 않았다. getPeople 함수를 호출하면서 원하는 회원 수를 전달하면
// 프로미스를 만들 수 있다. then 함수를 연쇄시켜서 프로미스가 완료되면 원하는 일을 할 수 있다.
getPeople(5)
    .then(members => console.log(members))
    .catch(error => console.error(`getPeople failed: ${error.message}`))