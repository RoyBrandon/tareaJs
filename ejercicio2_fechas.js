//crear 3 variables (dia, mes y anio)

let dia = 5
let mes = 9
let anio = 2001

let fecha = new Date (anio, mes - 1, dia)

dayName = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
monthDay =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(dayName[fecha.getDay()])
console.log(monthDay[fecha.getMonth()])