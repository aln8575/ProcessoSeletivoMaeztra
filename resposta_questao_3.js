function sequenciaValida(string) {
  const pilha = []; // Usaremos uma pilha para rastrear os caracteres de abertura

  // Mapeamento dos caracteres de abertura e fechamento
  const mapaCaracteres = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  // Percorre cada caractere na sequência
  for (const caractere of string) {
    if (mapaCaracteres[caractere]) {
      // Se o caractere for de abertura, empilhe-o
      pilha.push(caractere);
    } else if (caractere === '}' || caractere === ']' || caractere === ')') {
      // Se o caractere for de fechamento, verifique se corresponde ao topo da pilha
      const caractereCorrespondente = mapaCaracteres[pilha.pop()];
      if (caractere !== caractereCorrespondente) {
        return false; // Sequência inválida
      }
    }
  }

  // A sequência é válida se a pilha estiver vazia no final
  return pilha.length === 0;
}

// Teste da função com exemplos
console.log(sequenciaValida("{ [ ( ) ( ) { } [ ] ] { } }")); 
console.log(sequenciaValida("{ [ ( ( ) ] }")); 
console.log(sequenciaValida("{ } [ ] ( )")); 
console.log(sequenciaValida("( ( ) { } [ [ ] )")); 
console.log(sequenciaValida("[ { } ( [ ) ] ]")); 