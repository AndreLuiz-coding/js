// Andre luiz dos santos rodrigues, 14/11/2026

// Exemplo de sintaxe de componente usando JSX.

// Um componente é como uma peça de Lego visual que forma uma parte da página.

// =========================================================================
// ARQUIVO: Botao.jsx
// Este é um arquivo JavaScript que usa a sintaxe JSX (HTML dentro do JS).
// =========================================================================

// 1. COMPONENTE FUNCIONAL:
// A palavra "function" cria uma peça reutilizável da interface.
// REGRA DO REACT: O nome do componente DEVE começar com letra Maiúscula ("Botao").
function Botao() {

  // 2. LÓGICA E COMPORTAMENTO (JavaScript puro):
  // Aqui dentro criamos variáveis e funções que definem o que o componente faz.
  function avisar() {
    alert("Oi! Você clicou no componente Botao.");
  }

  // 3. RETORNO VISUAL (JSX):
  // O "return" entrega o desenho que vai aparecer na tela do navegador.
  // Tudo que está aqui dentro parece HTML, mas na verdade é JSX.
  return (
    // - "onClick" usa camelCase (letra C maiúscula), diferente do HTML tradicional ("onclick").
    // - As chaves {avisar} servem para injetar código JavaScript dentro do JSX.
    <button onClick={avisar} className="btn-padrao">
      Clique aqui
    </button>
  );
}

// 4. EXPORTAÇÃO:
// Permite que este componente seja importado e usado em outras telas (ex: <Botao />).
export default Botao;
