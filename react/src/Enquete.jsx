// Andre luiz dos santos rodrigues, 16/11/2026

// 1. Cria a peça principal do React (sempre com letra maiúscula)
function Enquete() {
  // 2. Cria a ação do clique e recebe o nome da linguagem escolhida
    function escolher(linguagem) {
   // 3. Abre a janela de alerta na tela mostrando o nome recebido
        alert(linguagem);
  }

  // 4. Tudo dentro do return é o que o React desenha na tela
  return (
    // 5. Caixa principal que embrulha todo o visual da enquete
    <div>
      {/* 6. Título que aparece em cima das opções */}
      <h2>Qual sua linguagem favorita?</h2>
      
      {/* 7. Caixa menor que coloca os botões lado a lado com espaço entre eles */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      {/* 8. Botão que fica vigiando o clique e dispara a função com 'JavaScript' */}
      <button onClick={() => escolher('JavaScript')}>JavaScript</button>
      {/* 9. Mesmo comportamento, mas passando o texto 'Python' */}
      <button onClick={() => escolher('Python')}>Python</button>
      {/* 10. Mesmo comportamento, mas passando o texto 'Java' */}
      <button onClick={() => escolher('Java')}>Java</button>
    </div>
    </div>
  );
}
// 11. Libera a peça Enquete para ser importada lá no App.jsx
export default Enquete;

