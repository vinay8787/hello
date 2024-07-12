// Parent class for Employee
class Employee {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
  
    // Method to get employee details
    getDetails() {
      return `Name: ${this.name}, ID: ${this.id}`;
    }
  }
  // Subclass for Manager inheriting from Employee    // Method to list skills
    listSkills() {
      return `Skills: ${this.skills.join(', ')}`;
    }

  class Manager extends Employee {
    constructor(name, id, employeesManaged) {
      super(name, id);
      this.employeesManaged = employeesManaged;
    }
  
    // Override method to include employees managed
    getDetails() {
      return `${super.getDetails()}, Employees managed: ${this.employeesManaged}`;
    }
  }
  
  // Subclass for Engineer inheriting from Employee
  class Engineer extends Employee {
    constructor(name, id, skills) {
      super(name, id);
      this.skills = skills;
    }
  }
  
  // Creating instances of different employees
  let manager1 = new Manager('John Doe', 'M001', 5);
  let engineer1 = new Engineer('Jane Smith', 'E001', ['JavaScript', 'Python', 'HTML']);
  
  // Displaying details using methods
  console.log(manager1.getDetails());
  console.log(engineer1.getDetails());
  console.log(engineer1.listSkills());
  
  // Demonstrating encapsulation
  manager1.name = 'Updated Name'; // Modify directly (no encapsulation)
  console.log(manager1.getDetails());
  
  // Encapsulation example using private fields (needs modern JS environment)
  class PrivateEmployee {
    #name;
    #id;
  
    constructor(name, id) {
      this.#name = name;
      this.#id = id;
    }
  
    getDetails() {
      return `Name: ${this.#name}, ID: ${this.#id}`;
    }
  }
  
  let privateEmployee = new PrivateEmployee('Alice', 'P001');
  console.log(privateEmployee.getDetails());
  
  // Exporting modules (requires module environment)
  // export { Employee, Manager, Engineer, PrivateEmployee };
  
  