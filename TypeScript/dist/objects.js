"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`Department ${this.id} : ${this.name}`);
    }
}
class AccounctingDept extends Department {
    constructor(id, report) {
        super(id, "IT");
        this.report = report;
    }
    addReport(text) {
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
