// Существует какой-то класс в приложении и в приложении может быть только один Инстанс данного класса.
// Для одинарного подключения к базе данных. Например. Если коннект к базе уже существует, мы не будем коннектиться второй раз, а будем подлючаться по готовому соединению

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database("MongoDB");
console.log(mongo.getData());

// Мы создали объект mongo и теперь у класса Database есть instance - MongoDB

const mySql = new Database("MySQL");
console.log(mySql.getData());

// Мы пытаемся обновить instance, имея уже instance, у нас возвращается старый instance. Это правильно со стороны singleton паттерна
// Мы используем один instance каждый раз
