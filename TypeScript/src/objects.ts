export {};
// const person: {
//   firstName: string;
//   age: number;
// } = {
// const person = {
//   firstName: "Ramya",
//   age: 21,
//   hobbies: ["games", "cooking"],tsc
//   role: ["Developer", 12],
// };

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// console.log(person.firstName);

// console.log(person);
// console.log(person.role.push('krishna'));
// person.role[0] = 23;
// console.log(person);
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number")
//     result = input1 + input2;
//   else result = input1.toString() + input2.toString();
//   if (resultConversion === "as-number") return +result + 2;
//   else return result.toString();
// }

// console.log(combine(12, 45, "as-number"));
// console.log(combine("Ramya", "Krishna", "as-text"));
// console.log(combine("12", "45", "as-number"));

// type User = { name: string; age: number };

// function getUser(u1: User) {
//   console.log(`Hi my name is ${u1.name} and Iam ${u1.age}years old.`);
// }

// const user1 = { name: "Ramya", age: 21 };
// getUser(user1);

//type aliases
// const num = "ram";

// type Owner = { name: string } | string;
// let ownName: Owner = { name: "Ramya" };
// ownName = "krish";
// console.log(ownName);

// function sendRequest(data: string, cb: (response: any) => void) {
//   // ... sending a request with "data"
//   // console.log(data);
//   return cb({ data: "Hi there!" });
// }

// sendRequest("Send this!", (response) => {
//   console.log(response);
//   return true;
// });

class Department {
  // private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department ${this.id} : ${this.name}`);
  }
}

// const accounting = new Department("FL1756", "Ramy krishna");
// console.log(accounting);
// accounting.describe();

class AccounctingDept extends Department {
  constructor(id: string, private report: string[]) {
    super(id, "IT");
  }

  addReport(text: string) {
    this.report.push(text);
  }

  printReport() {
    console.log(this.report);
  }
}

const it = new AccounctingDept("d1", []);
it.addReport("Something went wrong...");
it.printReport();
console.log(it);
