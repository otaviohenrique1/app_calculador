import { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Flex } from '../components/Containers/Flex';
import CalculadoraOperacoes from '../utils/CalculadoraOperacoes';
import { ADICAO, DELETAR, DIVISAO, FATORIAL, FRACAO, IGUAL, LIMPAR_TELA, LIMPAR_TELA_MEMORIA, LOGARITIMO, MULTIPLICACAO, NUMERO_0, NUMERO_1, NUMERO_2, NUMERO_3, NUMERO_4, NUMERO_5, NUMERO_6, NUMERO_7, NUMERO_8, NUMERO_9, NUMERO_PI, PONTO, PORCENTAGEM, POTENCIA, POTENCIA_QUADRADO, RAIZ_QUADRADA, SUBTRACAO, TROCAR_SINAL } from '../utils/constantes';

export default function Calculadora() {
  const valorInicialTela = "0";
  const valorInicialExpressao = "----";

  const [valorTela, setValorTela] = useState(valorInicialTela);
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [operador, setOperador] = useState("");
  const [expressao, setExpressao] = useState(valorInicialExpressao);
  // const [conta, setConta] = useState({ valor1: "", operador: "", valor2: "" });

  const listaTeclas = [
    {
      nome: POTENCIA, cor: "primary", acao: () => {
        setOperador(POTENCIA);
        setValor1(Number(valorTela));
      }
    },
    {
      nome: NUMERO_PI, cor: "primary", acao: () => {
        let resultado = CalculadoraOperacoes.NumeroPi();
        setExpressao(valorInicialExpressao);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: FATORIAL, cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.Fatorial(valor);
        setExpressao(`${valor}! = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: LOGARITIMO, cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.Logaritimo(valor);
        setExpressao(`log(${valor}) = `);
        setValorTela(resultado.toString());
      }
    },

    {
      nome: PORCENTAGEM, cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.Porcentagem(valor);
        setExpressao(`${valor}% = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: LIMPAR_TELA, cor: "primary", acao: () => {
        setValorTela(valorInicialTela);
        setExpressao(valorInicialExpressao);
        setOperador("");
        setValor1(0);
        setValor2(0);
      }
    },
    {
      nome: LIMPAR_TELA_MEMORIA, cor: "primary", acao: () => {
        setValorTela(valorInicialTela);
        setExpressao(valorInicialExpressao);
        setOperador("");
        setValor1(0);
        setValor2(0);
      }
    },
    {
      nome: DELETAR, cor: "primary", acao: () => {
        if (valorTela.length === 0) {
         return setValorTela("0");
        }
        setValorTela(valorTela.substring(0, valorTela.length - 1));
      }
    },
    {
      nome: FRACAO, cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.Fracao(valor);
        setExpressao(`1/${valor} = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: POTENCIA_QUADRADO, cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.PotenciaQuadrado(valor);
        setExpressao(`${valor}**2 = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: RAIZ_QUADRADA, cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.RaizQuadrada(valor);
        setExpressao(`R2(${valor}) = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: DIVISAO, cor: "primary", acao: () => {
        setValor1(Number(valorTela));
        setOperador(DIVISAO);
        setValorTela(DIVISAO);
      }
    },
    {
      nome: NUMERO_7, cor: "primary", acao: () => {
        if (operador !== "") {
          setValorTela("0")
        }
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_7));
      }
    },
    {
      nome: NUMERO_8, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_8));
      }
    },
    {
      nome: NUMERO_9, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_9));
      }
    },
    {
      nome: MULTIPLICACAO, cor: "primary", acao: () => {
        // 
      }
    },
    {
      nome: NUMERO_4, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_4));
      }
    },
    {
      nome: NUMERO_5, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_5));
      }
    },
    {
      nome: NUMERO_6, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_6));
      }
    },
    {
      nome: SUBTRACAO, cor: "primary", acao: () => {
        // 
      }
    },
    {
      nome: NUMERO_1, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_1));
      }
    },
    {
      nome: NUMERO_2, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_2));
      }
    },
    {
      nome: NUMERO_3, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_3));
      }
    },
    {
      nome: ADICAO, cor: "primary", acao: () => {
        setValor1(Number(valorTela));
        setValorTela("0");
        setOperador(ADICAO);
      }
    },
    {
      nome: TROCAR_SINAL, cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.TrocaDeSinal(valor);
        setExpressao(`${TROCAR_SINAL}${valor} = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: NUMERO_0, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, NUMERO_0));
      }
    },
    {
      nome: PONTO, cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaPontoDecimal(valorTela));
      }
    },
    {
      nome: IGUAL, cor: "primary", acao: () => {
        switch (operador) {
          case DIVISAO:
            setValor2(Number(valorTela));
            let divisao = CalculadoraOperacoes.Divisao(valor1, valor2);
            setExpressao(`${valor1} ${operador} ${valor2} = `);
            setValorTela(divisao.toString());
            break;
          case POTENCIA:
            setValor2(Number(valorTela));
            let potencia = CalculadoraOperacoes.Potencia(valor1, valor2);
            setExpressao(`${valor1}**${valor2} = `);
            setValorTela(potencia.toString());
            break;
          default:
            break;
        }
      }
    },
  ];

  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      paddingTop="30px"
      paddingLeft="20px"
      paddingRight="20px"
      maxWidth="500px"
    >
      <Row>
        <Col xs={12}>
          <h1 className="w-100 text-center">Calculadora</h1>
        </Col>
        <Col xs={12}>
          <h5 className="w-100 text-end">{expressao}</h5>
          <h2 className="w-100 text-end">{valorTela}</h2>
        </Col>
        {listaTeclas.map((item, index) => {
          return (
            <Col xs={3} className="p-1" key={index}>
              <Button
                className="w-100"
                color={item.cor}
                onClick={item.acao}
              >{item.nome}</Button>
            </Col>
          );
        })}
      </Row>
    </Flex>
  );
}
