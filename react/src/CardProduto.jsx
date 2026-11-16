// Cria o componente Filho. As chaves { titulo, preco } nos parênteses pescam as props enviadas pelo App.jsx.
function CardProduto({ titulo, preco }) {
  // Inicia o retorno visual deste cartão.
  return (
    // Cria a caixa visual do cartão com borda cinza, cantos arredondados e espaçamento interno/externo.
    <div style={{ border: '1px solid #888', borderRadius: '8px', padding: '12px', margin: '10px 0' }}>
      
      {/* Exibe o valor recebido na prop 'titulo'. As chaves { } avisam o React para ler a variável JavaScript. */}
      <h3>{titulo}</h3>
      
      {/* Escreve o texto fixo "Valor: R$" junto com o valor dinâmico recebido na prop 'preco'. */}
      <p>Valor: R$ {preco}</p>
      
    {/* Fecha a div do cartão. */}
    </div>
  );
}

// Exporta este molde como padrão para que o App.jsx consiga importá-lo na linha 1.
export default CardProduto;
