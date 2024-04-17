// Se crea funcion para calcular la edad que toma como parametro la fecha de tipo Date, que representa la fecha de nacimiento
function calcularEdad(fechaDeNacimiento) {
    // Creamos un objeto "Fecha actual" de tipo Date que representa la fecha actual
    var fechaActual = new Date();
    //Restamos el año de nacimiento "fechaDeNacimiento.getFullYear" del año actual, "fechaActual.getFullYear" para obtener la edad aproximada.
    //Esto puede no ser completamente preciso si el cumpleaños aún no ha ocurrido este año
    var edad = fechaActual.getFullYear() - fechaDeNacimiento.getFullYear();
    // Verificar si el cumpleaños ya pasó este año
    //Comparamos el mes de nacimiento "fechaDeNacimiento.getMonth" 
    var mesDeCumpleaños = fechaDeNacimiento.getMonth();
    //y el día de nacimiento fechaDeNacimiento.getDate 
    var diaDeCumpleaños = fechaDeNacimiento.getDate();
    //con el mes actual fechaActual.getMonth 
    var mesActual = fechaActual.getMonth();
    //y el día actual fechaActual.getDate
    var diaActual = fechaActual.getDate();
    //Si el cumpleaños aun no pasa, si el mes y el día de nacimiento son posteriores al mes y al día actuales, entonces la persona aún no ha cumplido años este año
    if (mesActual < mesDeCumpleaños || (mesActual === mesDeCumpleaños && diaActual < diaDeCumpleaños)) {
        //por lo que restamos 1 a la edad calculada
        return edad - 1;
    }
    //Devolvemos la edad calculada
    return edad;
}
// Creamos un objeto "fechaDeNacimiento" de tipo Date con la fecha de nacimiento
var fechaDeNacimiento = new Date('1990-05-15');
//Luego llamamos a la función calcularEdad con esta fecha y se muestra el resultado
var fecha = new Date('1997-11-10');
//una variable para guardar los datos, llamando la funcion y poniendo la fecha
var edad = calcularEdad(fechaDeNacimiento);
//una variable para guardar los datos, llamando la funcion y poniendo la fecha //de prueba
var cal = calcularEdad(fecha);
//lo imprimimos con la primera fecha que pusimos
console.log("La edad es: ".concat(edad, " a\u00F1os"));
//lo imprimimos con la fecha de prueba que pusimos
console.log("La edad es: ".concat(cal, " a\u00F1os"));
