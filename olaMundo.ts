let p = document.createElement('p');
let ola: string = 'Olá mundo';
p.textContent = ola;
document.body.appendChild(p);

let num: number = 5;
let str: string = `Matheus`;
let bool: boolean = true;
console.log(str)

const arrowFunc = (): void => {
    //Void: A function não terá nenhum return(retorno)
}
if (bool !== null) { }
if (bool === undefined) { }

if (bool) {
    for (let i = 0; i < 3; i++) { console.log(i) }
}

let list: number[] = [1, 2, 3, 4]
let list2: Array<number> = [1, 2, 3]

let tuple: [string, number];
tuple = ['Matheus', 17]
console.log(tuple)

//O enum é um dos tipos do TypeScript que nos permite declarar um conjunto de valores/constantes pré-definidos
enum DiaDaSemana {
    Segunda = 1,
    Terça = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7,
}
let dia: DiaDaSemana = DiaDaSemana.Segunda;
console.log(`Dia: ${DiaDaSemana[1]}`)

const add = (v1: number, v2: number, v3?: number): number => {
    if (v3 !== undefined)
        return v1 + v2 + v3
    return v1 + v2
}
console.log(`soma: ${add(1, 2, 3)}`)

let qualquerTipo: any = 'Any aceita qualquer tipo. Por exemplo: number, boolean e etc...'

let stringLength: number = (<string> qualquerTipo).length;
let stringUpperCase: string = (qualquerTipo as string).toUpperCase();

console.log(stringLength);
console.log(stringUpperCase);

const add2 = (desc: string, ...valores: number[]): void => {
    let sum: number = 0;
    for (let i = 0; i < valores.length; i++) { sum += valores[i] }
    console.log(`${desc} ${sum}`)
}

add2("Soma é:", 1, 2, 3, 4)