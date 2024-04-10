// const { describe, test, expect } = require('jest');
const {
  somarNumeros, subtrairNumeros, multiplicarNumeros, dividirNumeros,
} = require('../src/matematica');

/**
   * @description Testa a função de soma de números.
   */
describe('Função que soma dois númeos', () => {
  test('Soma de números', () => {
    /**
       * Verifica se a função de soma retorna o resultado esperado.
       * @expect {number} O resultado esperado.
       * @toBe {number} O resultado da função.
       */
    expect(somarNumeros(2, 3)).toBe(5);
  });
});

/**
   * @description Testa a função de subtração de números.
   */
describe('Função que subtrai dois númeos', () => {
  test('Subtração de números', () => {
    /**
       * Verifica se a função de subtração retorna o resultado esperado.
       * @expect {number} O resultado esperado.
       * @toBe {number} O resultado da função.
       */
    expect(subtrairNumeros(5, 3)).toBe(2);
  });
});

/**
   * @description Testa a função de multiplicação de números.
   */
describe('Função que multiplica dois númeos', () => {
  test('Multiplicação de números', () => {
    /**
       * Verifica se a função de multiplicação retorna o resultado esperado.
       * @expect {number} O resultado esperado.
       * @toBe {number} O resultado da função.
       */
    expect(multiplicarNumeros(4, 6)).toBe(24);
  });
});

/**
   * @description Testa a função de divisão de números.
   */
describe('Função que divide dois númeos', () => {
  test('Divisão de números', () => {
    /**
       * Verifica se a função de divisão retorna o resultado esperado.
       * @expect {number} O resultado esperado.
       * @toBe {number} O resultado da função.
       */
    expect(dividirNumeros(8, 2)).toBe(4);
    /**
       * Verifica se uma exceção é lançada ao tentar dividir por zero.
       * @expect {Error} A exceção esperada.
       * @toThrowError {Error} A exceção lançada.
       */
    expect(() => dividirNumeros(5, 0)).toThrowError('Divisão por zero não é permitida.');
  });
});
