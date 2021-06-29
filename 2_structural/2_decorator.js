// Декоратор - с помощью данного паттерна мы имеем возможность добавлять какое-то новое поведение или функционал для существуютх классов

class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}: ${this.port}`;
  }
}

// Декораторами выступают какие-то функции, которые принимают инстанс какого-то класса, модифицирует его и возващает обратно

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };

  return server;
} // Принимает инстанс server и возвращает server

function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}

const s1 = aws(new Server("12.34.56.78", 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());

const s2 = azure(new Server("98.2312.223.44", 1000));
console.log(s2.isAzure);
console.log(s2.url);

// Добавляют слой метаданных для каких-то существующих объектов
