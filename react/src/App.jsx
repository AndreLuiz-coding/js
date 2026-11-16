// Andre luiz dos santos rodrigues, 16/11/2026

// Importa novos arquivo aqui
import CardProduto from './CardProduto';
import PraticaEventos from './PraticaEventos'; 
import Enquete from './Enquete';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Minha Loja React</h1>

      {/* Seus componentes de ontem continuam aqui */}
      <CardProduto titulo="Notebook Gamer" preco="4.500,00" />
      <CardProduto titulo="Mouse Sem Fio" preco="120,00" />
      <CardProduto titulo="Teclado Mecânico" preco="350,00" />

      <hr style={{ margin: '30px 0' }} /> {/* Linha divisória visual */}

      {/* 2. Chama o novo componente de eventos logo abaixo */}
      <PraticaEventos />
      {/* 2. Desenha a peça inteira da Enquete na tela, exatamente neste lugar */}
      <Enquete />

    </div>
  );
}

export default App;
