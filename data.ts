/*

var data = new Date();

alert(data.getDate())//Retorna o dia de hoje
alert(data.getHours());//retorna que horas são(somente as horas, sem os minutos)
alert(data.getFullYear())//Retorna o ano atual
*/

var dataNasc = new Date("09/08/2023")
var dataAtual = new Date("09/10/2023");
console.log((dataAtual.getTime() - dataNasc.getTime()) / (1000 * 3600 * 24));//Diz o tempo em dias