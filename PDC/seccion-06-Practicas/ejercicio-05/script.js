function operacionesMatematicas(num1, num2) {
    let resultados = {};
    
    resultados.suma = parseFloat(num1) + parseFloat(num2);
    resultados.resta = parseFloat(num1) - parseFloat(num2);
    resultados.multiplicacion = parseFloat(num1) * parseFloat(num2);
    resultados.division = parseFloat(num1) / parseFloat(num2);

        
  resultados.suma = parseFloat(num1) + parseFloat(num2);
  resultados.resta = parseFloat(num1) - parseFloat(num2);
  resultados.multiplicacion = parseFloat(num1) * parseFloat(num2);
  resultados.division = parseFloat(num1) / parseFloat(num2);

    // resultados.suma = num1 + num2;
    // resultados.resta = num1 - num2;
    // resultados.multiplicacion = num1 * num2;
    // resultados.division = num1 / num2;
    
    console.log(resultados);
    return resultados;
  }