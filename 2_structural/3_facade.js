// фасад также относится к структурным дизайн паттернам.
// Служит для того, чтобы создавать более простой и уникальный интерфейс для взаимодействия с различными классами.
// Позволяет упросить определённые взаимодействия

class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

class complaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === "service") {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({ id, customer, details });
  }
}

const registry = new complaintRegistry();

console.log(registry.register("Vladilen", "service", "Недоступен"));
console.log(registry.register("Elena", "product", "Ошибка"));
