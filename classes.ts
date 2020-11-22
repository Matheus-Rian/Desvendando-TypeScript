class Person {
    protected name: string

    constructor(name: string) { this.name = name }

    print(): void { console.log(`name: ${this.name}`) }
}

class Employee extends Person {
    private _salary: number

    constructor(name: string, salary: number) {
        super(name)
        this._salary = salary
    }

    get salary(): number {
        return this._salary
    }
    
    set salary(value: number) {
        this._salary = value
    }

    print(): void {
        super.print()
        console.log(`salary: ${this.salary}`)
    }
}

let matheusPerson = new Person('Matheus')
let matheusEmployee = new Employee('Matheus', 3000)
matheusPerson.print()
matheusEmployee.print()

let p2 = <Person>{}
let p3: Person = new Employee("Lucy", 2000)
p3.print()