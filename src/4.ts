/*
  У цьому завдання вам належить реалізувати сценарій життя,
  де людина, ключ і будинок взаємодіють один з одним.
*/

// Ключ (Key)
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

// Людина (Person)
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Дім (House) — абстрактний клас
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Людина зайшла до будинку.');
    } else {
      console.log('Двері зачинені, увійти неможливо.');
    }
  }

  abstract openDoor(key: Key): void;
}

// Мій будинок (MyHouse)
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Двері відчинені.');
    } else {
      console.log('Ключ не підходить, двері залишаються зачиненими.');
    }
  }
}

// Сценарій: людина приходить додому
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
