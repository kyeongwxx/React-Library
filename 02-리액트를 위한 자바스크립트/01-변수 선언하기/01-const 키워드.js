// 상수(constant)는 값을 변경할 수 없는 변수이다. 일단 선언하고 나면 상수로 선언된 변수의 값을 변경할 수는 없다.
// 우리가 작성하는 자바스크립트 코드에는 변경해서는 안 되는 변수가 많다. 따라서 const를 많이 사용한다.

// 상수가 없던 시절에는 모든 값을 변수에 넣어 사용했다. 하지만 변수는 값을 변경할 수 있다.

var pizza = true;
pizza = false;
console.log(pizza); // false

// 상수에 값을 재설정하는 것은 불가능하다. 따라서 상수 값을 혹시라도 변경하려고 하면 오류가 발생한다.
const chicken = true
chicken = false // Uncaught TypeError: Assignment to constant variable.