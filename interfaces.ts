//Sem interface
const printName = (person: {name: string}): void => { console.log(person.name) }

let randomObj = {name: 'Matheus', age: 17};
let randomObj2 = {age: 17};
printName(randomObj)

//Com interface
interface IPerson {
    name: string;

}
interface IEmployee extends IPerson {
    salary: number;
}

let personMatheus: IPerson = {name: 'Matheus Rian'}
let employeeMatheus: IEmployee = {name: 'Matheus Acc', salary: 2000}

printName(personMatheus);
printName(employeeMatheus);

const printNameInterface = (person: IPerson): void => { console.log(person.name) }

printNameInterface(personMatheus)
printNameInterface(employeeMatheus)
printNameInterface(randomObj)
printNameInterface({name: 'Duda'} as IPerson)

interface IPerson {
    age?: number;
}

interface IManager extends IEmployee {
    readonly bonus: number;
}

let managerMatheus: IManager = {name: 'Matheus Acc', salary: 2000, bonus: 150}
managerMatheus.name = 'Matheus Rian'
printNameInterface(managerMatheus)
// managerMatheus.bonus = 200
// Usando o readonly eu não posso mudar o valor do meu atributo/var depois de criado. Por exemplo, eu crei o bonus no managerMatheus e depois disso tentei retribuir o seu valor. Error!