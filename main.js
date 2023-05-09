
alert ("Bienvenido al calculador de Ambientes de A/A")
alert ("Ahora, Le pediremos las medidas de su ambiente para saber que Capacidad de Aire Acondicionado necesita para su hogar, las medidas deberan ser ingresadas en metros")
    function calcular () {
        
        let altura = Number(prompt("Ingrese La altura del ambiente"));
        let ancho = Number (prompt("Ingrese el ancho del ambiente"));
        let largo = Number (prompt("Ingrese el largo del ambiente"));


    if (isNaN(altura) , isNaN(ancho) , isNaN(largo)) {
        return "Debe ingresar tres números válidos";} 
        
        else {
        let resultado = (altura * ancho * largo) * 50;

        if (resultado < 3001) {
        alert(`El resultado del calculo de sus ambientes da ${resultado}. Necesita un equipo de 3000 Frigorias.`);
        } 

        else if (resultado < 4501) {
        alert(`El resultado del calculo de sus ambientes da ${resultado}. Necesita un equipo de 4500 Frigorias.`);
        }
         
        else if (resultado < 4501) {
            alert(`El resultado del calculo de sus ambientes da ${resultado}. Necesita un equipo de 4500 Frigorias.`);
            }

        else {
        alert(`El resultado del calculo de sus ambientes da ${resultado}. Necesita Acondicionamiento fuera de linea comercial.`);
        }
    }   
}

calcular()