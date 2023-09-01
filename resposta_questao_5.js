function calcularPermutacoes(numeroDePessoas) {
    // Verifica se o número de pessoas é válido (não negativo)
    if (numeroDePessoas < 0) {
      return "Número de pessoas inválido";
    }
  
    // Calcula as permutações usando a fórmula n!
    let resultado = 1;
    for (let i = 1; i <= numeroDePessoas; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  // Teste da função com um exemplo
  const numeroDePessoas = 5; // Substitua pelo número desejado
  const modosDistintos = calcularPermutacoes(numeroDePessoas);
  console.log(`Número de modos distintos: ${modosDistintos}`);