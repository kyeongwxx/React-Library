// js는 프로토타입을 사용한 상속(prototypical inheritance)라고 불리는 방법을 사용한다. 이 기법은 객체지향처럼 느껴지는 구조를
// 만들어내기 위한 기법이다. 예를 들어, new를 사용해 호출해야 하는 Vacation 생성자를 다음과 같이 정의할 수 있다.
function Vacation(destination, length) {
  (this.destination = destination), (this.length = length);
}

Vacation.prototype.print = function () {
  console.log(this.destination + "은(는) " + this.length + " 일 걸립니다.");
};

const maui = new Vacation("마우이", 7);

maui.print();

// 위 코드는 객체지향 언어의 커스텀 타입과 비슷한 느낌의 물건을 만들어낸다. Vacation에는 프로퍼티들과 메서드가 있다. maui 인스턴스는
// 프로토타입을 통해 print 메서드를 상속받는다. class는 이 프로토타입 구문에 대한 구문적 편의를 제공한다.
class Vacation2 {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(this.destination + "은(는) " + this.length + " 일 걸립니다.");
  }
}

// 클래스를 만들 때는 보통 클래스 이름의 첫 글자를 대문자로 표시한다. 클래스를 만들고 나면 new 키워드를 사용해 해당 클래스의 새로운
// 인스턴스(instance)를 만들 수 있다. 그 후, 인스턴스의 메서드를 호출할 수 있다.
const trip = new Vacation2("칠레 산티아고", 7);

console.log(trip.print());

// 클래스 객체를 만들고 나면 새로운 객체를 생성하기 위해 원하는 만큼 new를 호출할 수 있다. 클래스를 확장할 수도 있다. 기존의 클래스를
// 확장한 새로운 클래스는 상위 클래스의 모든 프로퍼티와 메서드를 상속한다.

// Vacation2를 여러 가지 휴가 타입을 정의하기 위한 추상 클래스로 사용할 수도 있다. 예를 들어, Expedition은 Vacation 클래스를
// 확장하되 장비를 표현하는 프로퍼티(gear)를 포함한다.
class Expedition extends Vacation2 {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(
      `당신의 ${this.gear.join("와(과) 당신의 ")}를(을) 가져오십시오.`
    );
  }
}

// 여기서 간단한 상속 관계를 볼 수 있다. 하위 클래스는 상위 클래스의 프로퍼티를 상속한다. print()에서는 상위 클래스에 있는 print()를
// 호출한 다음에 Expedition에 있는 추가 정보를 출력했다.
const trip2 = new Expedition("한라산", 3, ["선글라스", "오색 깃발", "카메라"]);

trip2.print();
