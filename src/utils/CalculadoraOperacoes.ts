export default class CalculadoraOperacoes {
  static Soma(a: number, b: number) {
    return a + b;
  }

  static Subtracao(a: number, b: number) {
    return a - b;
  }

  static Divisao(a: number, b: number) {
    return a / b;
  }

  static Multiplicacao(a: number, b: number) {
    return a * b;
  }

  static RaizQuadrada(x: number) {
    return Math.sqrt(x);
  }

  static Raiz(x: number, r: number) {
    return Math.pow(x, 1 / r);
  }

  static Potencia(x: number, e: number) {
    return Math.pow(x, e);
  }

  static PotenciaQuadrado(x: number) {
    return Math.pow(x, 2);
  }

  static TrocaDeSinal(x: number) {
    return x * -1;
  }

  static Porcentagem(x: number) {
    return x / 100;
  }

  static Fracao(x: number) {
    return 1 / x;
  }

  static ColocaPontoDecimal(x: string) {
    let resultado = x.concat(".");
    return resultado;
  }

  static NumeroPi() {
    return Math.PI;
  }

  static Logaritimo(x: number) {
    return Math.log(x);
  }

  static Fatorial(fatorial: number) {
    let resultado = 0;

    if (fatorial === 0 || fatorial === 1) {
      return 1;
    }

    if (!Number.isInteger(fatorial) || fatorial < 0) {
      return "Erro"
    }

    resultado = fatorial;
    let primeiroMultiplicador = fatorial - 1;
    for (let index = primeiroMultiplicador; index < 1; index--) {
      resultado *= index;
    }
    return resultado;
  }
}