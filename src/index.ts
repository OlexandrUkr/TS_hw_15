class Visitor {
  constructor(
    public name: string,
    public contactInfo: string
  ) {}
}

class Ticket<T> {
  constructor(
    public type: T,
    public cost: number
  ) {}
}

class TicketBooth<T> {
  private currentVisitors: Visitor[] = [];
  private clients: Client[] = [];
  private revenue: number = 0;

  sellTicket(visitor: Visitor, ticket: Ticket<T>): void {
    this.currentVisitors.push(visitor);
    this.clients.push(new Client(visitor));
    this.revenue += ticket.cost;
  }

  getRevenue(): number {
    return this.revenue;
  }
}

class CurrentVisitors {
  private visitors: Visitor[] = [];

  addVisitor(visitor: Visitor): void {
    this.visitors.push(visitor);
  }

  notifyBeforeClosing(): void {
    console.log('Notifying visitors before closing.');
  }

  notifyOnDeparture(): void {
    console.log('Notifying visitors on departure.');
  }
}

class Client {
  constructor(public visitor: Visitor) {}
}

class AdvertisingDepartment {
  private clients: Client[] = [];

  constructor(clients: Client[]) {
    this.clients = clients;
  }

  sendNewsAndPromotions(): void {
    console.log('Sending news and promotions to clients.');
  }
}

class Revenue {
  private dailyRevenue: number = 0;

  updateRevenue(newRevenue: number): void {
    this.dailyRevenue = newRevenue;
  }
}

class AccountingDepartment {
  private employees: Employee[] = [];
  private animals: Animal[] = [];
  private payments: Payment[] = [];

  generateFinancialReports(): void {
    console.log('Generating financial reports.');
  }
}

class Administration {
  private employees: Employee[] = [];
  private animals: Animal[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  removeAnimal(animal: Animal): void {
    const index = this.animals.indexOf(animal);
    if (index !== -1) {
      this.animals.splice(index, 1);
    }
  }

  createEventNotification(): void {
    console.log('Creating event notifications.');
  }
}

class Animal {
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public health: string
  ) {}
}

class Employee {
  constructor(
    public name: string,
    public position: string
  ) {}
}

class Budget {
  private totalBudget: number = 0;

  manageBudget(expenses: number): void {
    this.totalBudget -= expenses;
  }

  trackFinances(): void {
    console.log('Tracking finances.');
  }
}

class Payment {
  constructor(
    public description: string,
    public amount: number
  ) {}
}

// Example Usage
const visitor1 = new Visitor('Vasyl Rook', 'vasylrook@gmail.com');
const adultTicket = new Ticket('Adult', 20);

const ticketBooth = new TicketBooth<string>();
ticketBooth.sellTicket(visitor1, adultTicket);

const currentVisitors = new CurrentVisitors();
currentVisitors.addVisitor(visitor1);
currentVisitors.notifyBeforeClosing();

const client = new Client(visitor1);
const advertisingDepartment = new AdvertisingDepartment([client]);
advertisingDepartment.sendNewsAndPromotions();

const revenue = new Revenue();
revenue.updateRevenue(ticketBooth.getRevenue());

const accountingDepartment = new AccountingDepartment();
accountingDepartment.generateFinancialReports();

const administration = new Administration();
const employee = new Employee('Anna Duda', 'Manager');
administration.addEmployee(employee);
administration.createEventNotification();
const animal = new Animal('Lion', 'Leva', 5, 'Healthy');
administration.addAnimal(animal);
const budget = new Budget();
const expenses = 1000;
budget.manageBudget(expenses);
budget.trackFinances();
