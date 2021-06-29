// Behaviour design patterns - Поведенческие дизайн паттерны - позволяют улучшить коммуникацию между объектами разного типа.
// Chain of responsibility - паттерн, который позволяет последовательно у какого-то объекта вызывать набор операций, и последовательно их модифицировать

class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

const sum1 = new MySum();

console.log(sum1.add(8).add(10).add(10)); //Такая вот цепочка и является паттерном chain of resposibility
