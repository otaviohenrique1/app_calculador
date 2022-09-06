import { NUMERO_0, PONTO } from "./constantes";

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
    if (isNaN(x)) {
      return "Erro: não é numero";
    }
    return Math.sqrt(x);
  }

  static Raiz(x: number, r: number) {
    return Math.pow(x, 1 / r);
  }

  static Potencia(x: number, e: number) {
    if (isNaN(x)) {
      return "Erro: não é numero";
    }
    return Math.pow(x, e);
  }

  static PotenciaQuadrado(x: number) {
    if (isNaN(x)) {
      return "Erro: não é numero";
    }
    return Math.pow(x, 2);
  }

  static TrocaDeSinal(x: number) {
    if (isNaN(x)) {
      return "Erro: não é numero";
    }
    return x * -1;
  }

  static Porcentagem(x: number) {
    if (isNaN(x)) {
      return "Erro: não é numero";
    }
    return x / 100;
  }

  static Fracao(x: number) {
    if (isNaN(x)) {
      return "Erro: não é numero";
    }
    return 1 / x;
  }

  static NumeroPi() {
    return Math.PI;
  }

  static Logaritimo(x: number) {
    if (isNaN(x)) {
      return "Erro: não é numero";
    }
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

  static ColocaPontoDecimal(x: string): string {
    const regex = /[.]/g;
    const buscaPonto = x.search(regex);
    const validaBuscaPonto = buscaPonto !== -1;

    if (isNaN(Number(x))) {
      return "Erro: não é numero";
    } else if (x === NUMERO_0) {
      return x.concat(PONTO);
    } else if (validaBuscaPonto) {
      return x;
    } 
    return x.concat(PONTO);
  }

  static ColocaNumero(numeroAtual: string, numeroAdicionado: string) {
    if (isNaN(Number(numeroAtual))) {
      return numeroAdicionado;
    } else if (numeroAtual === NUMERO_0) {
      return numeroAdicionado;
    }
    return numeroAtual.concat(numeroAdicionado);
  }
}