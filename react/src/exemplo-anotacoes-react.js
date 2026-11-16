/* Andre luiz dos santos rodrigues, 15/11/2026.

/*
====================================================================
GUIA INTRODUTÓRIO: REACT VS JQUERY
Anotações de estudo - Conceitos Fundamentais
====================================================================

1. POR QUE O REACT EXIGE TERMINAL E SERVIDOR?
- JSX: O React mistura HTML dentro do JavaScript. O navegador não entende
  isso nativamente, então ferramentas traduzem o código antes de exibir.
- Empacotamento (Bundling): Projetos modernos têm dezenas de arquivos.
  Ferramentas como o Vite juntam e otimizam tudo automaticamente.
- Node.js e NPM: Usados no terminal para instalar bibliotecas e ligar o
  servidor local (ex: npm run dev) que atualiza a tela sozinho (Hot Reload).

2. COMPARAÇÃO DIRETA: JQUERY VS REACT
- Execução: No jQuery você abre o arquivo .html direto no navegador. No
  React você roda um servidor local pelo terminal.
- Foco: O jQuery busca elementos prontos na tela e altera manualmente (DOM).
  O React cria peças reutilizáveis que reagem a mudanças de dados (Estado).
- Organização: O modelo antigo separa por tecnologia (.html, .css, .js).
  O React separa por funcionalidade (cada componente tem seu visual e lógica).

3. MUDANÇA DE MENTALIDADE (IMPERATIVO VS DECLARATIVO)
- jQuery (Imperativo): Você dá ordens passo a passo ("ache o botão X,
  espere o clique, pegue o texto Y e cole na div Z").
- React (Declarativo): Você apenas descreve como a tela deve ficar com
  base nos dados. Quando o dado muda, o React atualiza a tela sozinho.

4. PRÓXIMOS PASSOS NOS ESTUDOS
- Focar no React e JavaScript moderno (Vanilla JS), deixando o jQuery apenas
  para eventual manutenção de sistemas muito antigos.
- Dominar recursos essenciais do JS: arrow functions (=>), .map(), .filter(),
  desestruturação e async/await.
- Avançar para o estudo de Componentes no React.

====================================================================
*/
