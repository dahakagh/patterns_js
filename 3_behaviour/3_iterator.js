// Вся идея заключается в том, что мы создаём какой-то объект или класс, у которого
// Мы сможем последовательно получать доступ до определенной информации

class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0,
          };
        }
      },
    };
  }
}

const iterator = new MyIterator(["This", "Is", "Iterator"]);

for (const val of iterator) {
  console.log("Value: ", val);
}
