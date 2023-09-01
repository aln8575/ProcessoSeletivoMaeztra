function verificaSequencia(numero) {
  // Converte o número para uma string para facilitar o acesso aos dígitos
  const numeroStr = numero.toString();
  
  // Inicializa as variáveis para verificar a sequência crescente e decrescente
  let sequenciaCrescente = true;
  let sequenciaDecrescente = true;

  // Percorre os dígitos a partir do segundo dígito
  for (let i = 1; i < numeroStr.length; i++) {
    const digitoAnterior = parseInt(numeroStr[i - 1]);
    const digitoAtual = parseInt(numeroStr[i]);

    // Verifica se a diferença entre os dígitos é maior que 1
    if (Math.abs(digitoAtual - digitoAnterior) > 1) {
      sequenciaCrescente = false;
      sequenciaDecrescente = false;
      break;
    }
    
    // Verifica se os dígitos são estritamente crescentes ou decrescentes
    if (digitoAtual !== digitoAnterior + 1) {
      sequenciaCrescente = false;
    }
    
    if (digitoAtual !== digitoAnterior - 1) {
      sequenciaDecrescente = false;
    }
  }

  // Determina o resultado com base nas verificações
  if (sequenciaCrescente || sequenciaDecrescente) {
    return "Está ordenado";
  } else {
    return "Não está ordenado";
  }
}

// Teste da função com exemplos
console.log(verificaSequencia(12345678));    
console.log(verificaSequencia(1223455678));  
console.log(verificaSequencia(876543210));   
console.log(verificaSequencia(152456457));   
console.log(verificaSequencia(12356789));    
console.log(verificaSequencia(13579));       
console.log(verificaSequencia(9765421));     
console.log(verificaSequencia(123454321));   
console.log(verificaSequencia(12222222));    
console.log(verificaSequencia(2111111));     
console.log(verificaSequencia(1599));        