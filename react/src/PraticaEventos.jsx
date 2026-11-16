function PraticaEventos() {
  
  // 1. Função simples (sem parâmetros)
  function cliqueSimples() {
    alert("Você clicou no botão simples!");
  }

  // 2. Função que recebe um parâmetro (um dado específico)
  function cliqueComParametro(nomeDoCurso) {
    alert(`Você escolheu o curso de: ${nomeDoCurso}`);
  }

  // 3. Função que lê o que está sendo digitado no campo (DOM / SyntheticEvent)
  function aoDigitar(evento) {
    // Mostra no Console do navegador (aperte F12 na página para ver)
    console.log("Texto atual:", evento.target.value);
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Testando Eventos no React</h1>

      {/* EXEMPLO 1: camelCase (onClick) e sem parênteses () no final */}
      <div style={{ marginBottom: '20px' }}>
        <h3>1. Clique Simples</h3>
        <button onClick={cliqueSimples}>
          Clique aqui
        </button>
      </div>

      {/* EXEMPLO 2: Passando parâmetro usando Arrow Function () => */}
      <div style={{ marginBottom: '20px' }}>
        <h3>2. Clique com Parâmetro</h3>
        <button onClick={() => cliqueComParametro("React JS")} style={{ marginRight: '10px' }}>
          Escolher React
        </button>
        <button onClick={() => cliqueComParametro("JavaScript")}>
          Escolher JavaScript
        </button>
      </div>

      {/* EXEMPLO 3: Evento onChange capturando digitação */}
      <div>
        <h3>3. Evento de Digitação (abra o Console com F12)</h3>
        <input 
          type="text" 
          placeholder="Digite algo aqui..." 
          onChange={aoDigitar} 
        />
      </div>
    </div>
  );
}

export default PraticaEventos;
