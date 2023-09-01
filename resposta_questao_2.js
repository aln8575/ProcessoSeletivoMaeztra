function encontraDuplicados(array) {
    const contador = {}; // Um objeto para contar a frequência dos valores no array
    const duplicados = [];
  
    // Percorre o array para contar a frequência de cada valor
    for (const elemento of array) {
      if (contador[elemento]) {
        contador[elemento]++;
      } else {
        contador[elemento] = 1;
      }
    }
  
    // Percorre o objeto contador para encontrar os valores duplicados
    for (const elemento in contador) {
      if (contador[elemento] > 1) {
        duplicados.push(parseInt(elemento));
      }
    }
  
    return duplicados;
  }
  
  // Teste da função com o exemplo dado
  const array = [4, 5, 44, 98, 4, 5, 6, 7];
  const valoresDuplicados = encontraDuplicados(array);
  console.log(valoresDuplicados); // Output [4, 5]
