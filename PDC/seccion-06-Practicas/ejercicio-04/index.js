function invertirPalabras(str) {
    // Separar el string en un array de palabras
    let palabras = str.split(" ");
    
    // Crear un nuevo array para almacenar las palabras invertidas
    let palabrasInvertidas = [];
    
    // Iterar sobre el array de palabras en orden inverso y agregar cada palabra invertida al nuevo array
    for (let i = palabras.length - 1; i >= 0; i--) {
      let palabraInvertida = "";
      for (let j = palabras[i].length - 1; j >= 0; j--) {
        palabraInvertida += palabras[i][j];
      }
      palabrasInvertidas.push(palabraInvertida);
    }
    
    // Unir las palabras invertidas en un solo string separado por espacios
    let strInvertido = palabrasInvertidas.join(" ");
    
    // Imprimir el string invertido por la consola
    console.log(strInvertido);
    
    // Retornar el string invertido
    return strInvertido;
  }
  
  // Ejemplo de uso de la función
  invertirPalabras("Hola mundo"); // Salida: "aloh odnum"