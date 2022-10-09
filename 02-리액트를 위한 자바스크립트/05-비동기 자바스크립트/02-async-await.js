// 비동기 프로미스를 처리하는 다른 방법으로 async 함수를 만드는 방법이 있다. async를 사용하는 코드는 전통적인 동기적 방식의 코드와
// 비슷하기 때문에, 일부 개발자는 async 방식을 더 선호한다. then 함수를 연쇄 호출해 프로미스의 결과를 기다리는 대신, async 함수는
// 프로미스 다음에 있는 코드를 실행하기 전에 프로미스가 끝날 때까지 기다리라고 명령할 수 있다.
const getFakePerson = async () => {
  let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
  let { results } = res.join();
  console.log(results);
};

getFakePerson();

// 여기서 getFakePerson 함수 앞에 async라는 키워드가 있다는 점에 유의하자. 이 키워드는 getFakePerson 함수를 비동기 함수로
// 만들어준다. 비동기 함수에서는 코드를 더 진행하기 전에 프로미스가 완료될 때까지 기다릴 수 있다. 프로미스 호출 앞에 await 키워드를
// 붙이면, 프로미스가 완료될 때까지 기다렸다가 함수가 진행된다.
const getFakePerson2 = async () => {
  try {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.join();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

getFakePerson2();
// 이제는 앞 예제에서 본 then을 사용한 코드와 완전히 같은 일을 한다. fetch 호출이 성공하면 결과를 콘솔 로그에 남긴다. 실패하면
// console.error를 사용해 오류를 콘솔에 남긴다. async와 await을 사용할 때는 프로미스 호출 주변을 try...catch 블록으로 둘러싸서
// 정상적으로 완료되지 않은 프로미스에서 발생한 오류를 처리할 필요가 있다.