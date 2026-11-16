// Andre luiz dos santos rodrigues, 13/11/2026 

// ==========================================
// 1. OBJETO MATH (Matemática)
// ==========================================
console.log("=== 1. OBJETO MATH ===");

// Arredondamentos
console.log("Round (4.6):", Math.round(4.6)); // 5
console.log("Ceil (4.1):", Math.ceil(4.1));   // 5 (sempre para cima)
console.log("Floor (4.9):", Math.floor(4.9)); // 4 (sempre para baixo)

// Máximo, mínimo, potência e raiz
console.log("Maior valor:", Math.max(10, 50, 2)); // 50
console.log("Menor valor:", Math.min(10, 50, 2)); // 2
console.log("2 elevado a 3:", Math.pow(2, 3));    // 8
console.log("Raiz quadrada de 16:", Math.sqrt(16)); // 4

// Constante PI
console.log("Valor de PI:", Math.PI.toFixed(2)); // "3.14"

// Número inteiro aleatório entre 1 e 10
const aleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatório (1 a 10):", aleatorio);


// ==========================================
// 2. OBJETO DATE (Datas e Horários)
// ==========================================
console.log("\n=== 2. OBJETO DATE ===");

// Data e hora atuais
const agora = new Date();
console.log("Data atual completa:", agora);

// Extraindo partes da data
console.log("Ano:", agora.getFullYear());
console.log("Mês (0 = Jan, 11 = Dez):", agora.getMonth());
console.log("Dia do mês:", agora.getDate());
console.log("Dia da semana (0 = Dom, 6 = Sáb):", agora.getDay());

// Formatação para o padrão brasileiro
console.log("Data formatada (BR):", agora.toLocaleDateString("pt-BR"));
console.log("Hora formatada (BR):", agora.toLocaleTimeString("pt-BR"));

// Criando data específica e calculando diferença em dias
const inicio = new Date("2026-01-01T00:00:00");
const fim = new Date("2026-01-11T00:00:00");
const diferencaMs = fim - inicio;
const diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);
console.log("Diferença entre datas:", diferencaDias, "dias");


// ==========================================
// 3. OBJETO REGEXP (Expressões Regulares)
// ==========================================
console.log("\n=== 3. OBJETO REGEXP ===");

// Forma literal vs Construtor
const regexLiteral = /javascript/i; // 'i' ignora maiúsculas/minúsculas
const regexConstrutor = new RegExp("estudo", "i");

const frase = "Estou fazendo um Estudo de JavaScript!";

// Testando se o padrão existe (retorna true ou false)
console.log("Tem 'javascript'?", regexLiteral.test(frase)); // true
console.log("Tem 'estudo'?", regexConstrutor.test(frase));  // true

// Extraindo todos os números de um texto ('g' = busca global, '\d' = dígitos)
const textoComNumeros = "Pedido 450, itens: 3, valor: 99";
const numerosEncontrados = textoComNumeros.match(/\d+/g);
console.log("Números encontrados:", numerosEncontrados); // ["450", "3", "99"]

// Substituindo texto com replace()
const saudacao = "Olá mundo, bem-vindo ao mundo!";
const novaSaudacao = saudacao.replace(/mundo/g, "JS");
console.log("Texto substituído:", novaSaudacao); // "Olá JS, bem-vindo ao JS!"
