// 템플릿 문자열(template string)을 문자열 연결(concatenation) 대신 사용할 수 있다. 템플릿 문자열을 사용하면 문자열 중간에
// 변수를 삽입할 수도 있다.,

// 전통적인 문자열 연결은 더하기 기호(+)로 문자열과 변수를 서로 이어붙이는 방식을 선호한다.
console.log(lastName + ", " + firstName + " " + middleName);

// 템플릿에서는 변수 ${}를 사용해 문자열 안에 집어넣을 수 있기 때문에, 문자열을 단 하나만 사용해도 된다.
console.log(`${lastName}, ${firstName} ${middleName}`)

// 템플릿 문자열의 ${}에는 값을 만들어내는 js 식이라면 어떤 것이든 들어갈 수 있다. 템플릿 문자열은 공백을 유지한다.
// 따라서 전자우편 템플릿이나 코드 예제 등 공백이 들어가야 하는 문자열로 표시할 수 있는 다양한 틀에 템플릿 문자열을 사용할 수 있다.
const email = `
${firstName}님께,

${event} 티켓 ${qty} 건을 구매해 주셔서 감사합니다.

주문 상세 정보:
  ${lastName} ${firstName} ${middleName}
  ${qty} x $${price} = $${qty * price} 공연: ${event}

공연 시작 30분 전까지 배부처에서 티켓을 수령하시기 바랍니다.

감사합니다.

  ${ticketAgent} 드림
`