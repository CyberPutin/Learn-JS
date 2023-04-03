//Задача-1
//Исправить ошибку в создании экземпляра класса

class Animal {
  constructor(name) {
    this.name = name
  }

}

class Rabbit extends Animal {
  constructor(name) {
  // Не вызвали супер
    super(name)
    this.name = name
    this.created = Date.now()
  }
}

let rabbit = new Rabbit("Белый кролик")
alert(rabbit.name)