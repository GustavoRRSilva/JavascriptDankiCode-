/*

var data = new Date();

alert(data.getDate())//Retorna o dia de hoje
alert(data.getHours());//retorna que horas são(somente as horas, sem os minutos)
alert(data.getFullYear())//Retorna o ano atual
*/

//mm-dd-yyyy

var date = new Date('02/22/2023')
var dateNasc = new Date('09/13/2004')

var diferenca = (date.getTime() - dateNasc.getTime()) /(1000 * 60 * 60 * 24)

alert(diferenca)