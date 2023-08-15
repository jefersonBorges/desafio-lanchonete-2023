export const calcularPorcentagemDaTaxa = (taxa) => {
  switch (taxa.tipo) {

    case 'acrescimo':
      return (1 + calcularPorcentagem(taxa.valor))

    case 'desconto':
      return (1 - calcularPorcentagem(taxa.valor))

    default:
      return 1;
  }
}

export const calcularPorcentagem = (valorInteiro) => {
  return ((valorInteiro) / 100)
}