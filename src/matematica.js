/**
 * @function
 * @name somarNumeros
 * @description Função que recebe dois números como parâmetro e retorna a soma deles.
 * @param {number} a - O primeiro número a ser somado.
 * @param {number} b - O segundo número a ser somado.
 * @returns {number} A soma dos dois números.
 */
function somarNumeros(a, b) {
  return a + b;
}

/**
 * @function
 * @name subtrairNumeros
 * @description Função que recebe dois números como parâmetro e retorna a subtração deles.
   * @param {number} a - O número do qual subtrair.
   * @param {number} b - O número a ser subtraído.
   * @returns {number} A diferença entre os dois números.
   */
function subtrairNumeros(a, b) {
  return a - b;
}

/**
 * @function
 * @name multiplicarNumeros
 * @description Função que recebe dois números como parâmetro e retorna o produto deles.
   * @param {number} a - O primeiro número a ser multiplicado.
   * @param {number} b - O segundo número a ser multiplicado.
   * @returns {number} O produto dos dois números.
   */
function multiplicarNumeros(a, b) {
  return a * b;
}

/**
 * @function
 * @name dividirNumeros
 * @description Função que recebe dois números como parâmetro e retorna a divisão deles.
 * Se o divisor for zero, uma exceção é lançada.
   * @param {number} a - O dividendo
   * @param {number} b - O divisor
   * @throws {Error} Se o divisor for zero.
   * @returns {number} O resultado da divisão (o quociente).
   */
function dividirNumeros(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida.');
  }
  return a / b;
}

// Exemplos de uso das funções
const resultadoSoma = somarNumeros(5, 3);
console.log(`Soma: ${resultadoSoma}`);

const resultadoSubtracao = subtrairNumeros(10, 4);
console.log(`Subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = multiplicarNumeros(6, 7);
console.log(`Multiplicação: ${resultadoMultiplicacao}`);

try {
  const resultadoDivisao = dividirNumeros(8, 2);
  console.log(`Divisão: ${resultadoDivisao}`);
} catch (error) {
  console.error(error.message);
}

exports.somarNumeros = somarNumeros;
exports.subtrairNumeros = subtrairNumeros;
exports.multiplicarNumeros = multiplicarNumeros;
exports.dividirNumeros = dividirNumeros;
