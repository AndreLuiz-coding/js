// Andre luiz dos santos rodrigues, 22/11/26

// Pratica de Componentes e Imagens no React

import imagemTema from './assets/Minha-Bandeira-Socialismo.jpeg'; // Confira se o nome e extensão (.jpg, .png) batem com sua imagem
import './Socialismo.css';

function Socialismo() {
  return (
    <div className="container">
      <header className="cabecalho">
        <h1>Conceitos Principais do Socialismo</h1>
        <p>Uma visão introdutória sobre suas bases econômicas, sociais e históricas.</p>
      </header>

      <main className="conteudo">
        <div className="imagem-box">
          <img 
            src={imagemTema} 
            alt="Representação histórica e conceitual sobre o socialismo" 
          />
        </div>

        <section className="secao-conceitos">
          <h2>O que é o Socialismo?</h2>
          <p>
            O socialismo é uma corrente política, econômica e social que surgiu no século XIX, 
            em resposta às desigualdades geradas pela Revolução Industrial, defendendo uma 
            sociedade mais igualitária e a redução das diferenças entre classes sociais.
          </p>

          <h3>Pilares Fundamentais</h3>
          <div className="cards">
            <div className="card">
              <h4>1. Propriedade Coletiva ou Estatal</h4>
              <p>
                Defende que os meios de produção (fábricas, terras, bancos e recursos naturais) 
                pertençam à coletividade ou sejam administrados pelo Estado, e não por donos privados.
              </p>
            </div>

            <div className="card">
              <h4>2. Igualdade Social e Distribuição de Renda</h4>
              <p>
                Busca distribuir a riqueza produzida de forma mais equilibrada, garantindo acesso 
                universal a direitos básicos como saúde, educação, moradia e trabalho.
              </p>
            </div>

            <div className="card">
              <h4>3. Economia Planificada</h4>
              <p>
                Em vez de a produção ser guiada apenas pelo lucro e pelo livre mercado, o Estado 
                planeja o que e quanto produzir para atender às necessidades da população.
              </p>
            </div>

            <div className="card">
              <h4>4. Fim ou Redução da Luta de Classes</h4>
              <p>
                Baseado nas teorias de pensadores como Karl Marx e Friedrich Engels, propõe superar 
                a divisão entre burguesia (donos do capital) e proletariado (trabalhadores).
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Socialismo;
