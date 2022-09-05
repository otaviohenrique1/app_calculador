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

  static NumeroPi() {
    return Math.PI;
  }

  static Logaritimo(x: number) {
    return Math.log(x);
  }

  static Fatorial(num: number) {
    if (num === 0 || num === 1) {
      return 1;
    } else if (!Number.isInteger(num)) {
      return "Erro: não aceita numero decimal";
    } else if (num < 0) {
      return "Erro: não aceita numero negativo";
    } else if (isNaN(num)) {
      return "Erro: não é numero";
    }
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

  static ColocaPontoDecimal(x: string) {
    if (x === "0") {
      return x.concat(".");
    } else if (x.search(/[.]/g) !== -1) {
      return;
    }
    return x.concat(".");
  }

  static ColocaNumero(numeroAtual: string, numeroAdicionado: string) {
    if (numeroAtual === "0") {
      return numeroAdicionado;
    }
    return numeroAtual.concat(numeroAdicionado);
  }
}