// 객체 리터럴 개선(object literal enhancement)은 구조 분해의 반대라 할 수 있다. 객체 리터럴 개선은 구조를 다시 만들어내는 과정
// 또는 내용을 한데 묶는 과정이라 할 수 있다. 객체 리터럴 개선을 사용하면 현재 영역에 있는 변수를 객체의 필드로 묶을 수 있다.
const name = "탈락";
const elevation = "9738";

const funHike = { name, elevation };

console.log(funHike);

// 이제 funHike 객체에는 name과 elevation이라는 필드가 들어가 있다. 객체 리터럴 개선 또는 객체 재구축을 통해 객체 메서드를
// 만드는 것도 가능하다.
const print = function () {
  console.log(`${this.name} 산의 높이는 ${this.elevation} 피트입니다.`);
};

const funHike2 = { name, elevation, print };

console.log(funHike2.print());

// 이때 객체의 키에 접근하기 위해 this를 사용했다는 사실에 유의하자.

// 객체 메서드를 정의할 때는 더 이상 function 키워드를 사용하지 않아도 된다.

// 옛날 방식
var skier = {
  name: name,
  sound: sound,
  powderYell: function () {
    var yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed: function (mph) {
    this.speed = mph;
    console.log("속력(mph)", mph);
  },
};

// 새로운 방식
const skier2 = {
  name,
  sound,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log("속력(mph)", mph);
  },
};
// 객체 리터럴 개선을 통해 현재 영역에서 볼 수 있는 변수들을 객체의 필드에 대입할 수 있으며, function 키워드를 입력하지 않아도 되기
// 때문에 타이핑해야 할 양이 줄어든다.