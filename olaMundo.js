var p = document.createElement('p');
var ola = 'Olá mundo';
p.textContent = ola;
document.body.appendChild(p);
var num = 5;
var str = "Matheus";
var bool = true;
console.log(str);
var arrowFunc = function () {
    //Void: A function não terá nenhum return(retorno)
};
if (bool !== null) { }
if (bool === undefined) { }
if (bool) {
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }
}
var list = [1, 2, 3, 4];
var list2 = [1, 2, 3];
var tuple;
tuple = ['Matheus', 17];
console.log(tuple);
//O enum é um dos tipos do TypeScript que nos permite declarar um conjunto de valores/constantes pré-definidos
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
    DiaDaSemana[DiaDaSemana["Domingo"] = 7] = "Domingo";
})(DiaDaSemana || (DiaDaSemana = {}));
var dia = DiaDaSemana.Segunda;
console.log("Dia: " + DiaDaSemana[1]);
var add = function (v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
};
console.log("soma: " + add(1, 2, 3));
var qualquerTipo = 'Any aceita qualquer tipo. Por exemplo: number, boolean e etc...';
var stringLength = qualquerTipo.length;
var stringUpperCase = qualquerTipo.toUpperCase();
console.log(stringLength);
console.log(stringUpperCase);
//# sourceMappingURL=olaMundo.js.map