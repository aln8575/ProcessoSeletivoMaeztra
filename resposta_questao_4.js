function anosComMaisPessoasTrabalhando(matriz) {
    const anosTrabalhados = {};
  
    for (const pessoa of matriz) {
      const [anoInicio, anoAposentadoria] = pessoa;
      for (let ano = anoInicio; ano <= anoAposentadoria; ano++) {
        if (anosTrabalhados[ano]) {
          anosTrabalhados[ano]++;
        } else {
          anosTrabalhados[ano] = 1;
        }
      }
    }
  
    // Encontra os anos com mais pessoas trabalhando
    let anosComMaisPessoas = [];
    let maxPessoas = 0;
  
    for (const ano in anosTrabalhados) {
      const pessoasTrabalhando = anosTrabalhados[ano];
      if (pessoasTrabalhando > maxPessoas) {
        maxPessoas = pessoasTrabalhando;
        anosComMaisPessoas = [ano];
      } else if (pessoasTrabalhando === maxPessoas) {
        anosComMaisPessoas.push(ano);
      }
    }
  
    return anosComMaisPessoas;
  }
  
  // Teste da função com o exemplo dado
  const matriz = [[1960, 2005], [1945, 2008], [1938, 1999]];
  const anosMaisPessoas = anosComMaisPessoasTrabalhando(matriz);
  console.log("Anos com mais pessoas trabalhando:", anosMaisPessoas);
  