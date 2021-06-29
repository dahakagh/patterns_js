// Допустим есть некоторый класс, который содержит в себе определенный набор функционала
// comand pattern позволяет создавать определённую абстрактную оболочку над функционалом, котоырй позволяет управлять,
// но уже через другой объект, и тем самым записывая определённые состояния, которые были вызванны
// Пример comand pattern - Redux

class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue;
  }

  square() {
    return this.num ** 2;
  }

  cube() {
    return this.num ** 3;
  }
}

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

const x = new Command(new MyMath(2));
console.log(x.execute("square"));
console.log(x.execute("cube"));

console.log(x.commandsExecuted);
