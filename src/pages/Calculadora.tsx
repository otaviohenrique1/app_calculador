import { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Flex } from '../components/Containers/Flex';
import CalculadoraOperacoes from '../utils/CalculadoraOperacoes';

export default function Calculadora() {
  const valorInicialTela = "0";
  const valorInicialExpressao = "----";

  const [valorTela, setValorTela] = useState(valorInicialTela);
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState("");
  const [expressao, setExpressao] = useState(valorInicialExpressao);

  const listaTeclas = [
    { nome: "x**y", cor: "primary", acao: () => { } },
    {
      nome: "pi", cor: "primary", acao: () => {
        let resultado = CalculadoraOperacoes.NumeroPi();
        setExpressao(valorInicialExpressao);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: "n!", cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.Fatorial(valor);
        setExpressao(`${valor}! = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: "log", cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.Logaritimo(valor);
        setExpressao(`log(${valor}) = `);
        setValorTela(resultado.toString());
      }
    },

    {
      nome: "%", cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.Porcentagem(valor);
        setExpressao(`${valor}% = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: "CE", cor: "primary", acao: () => {
        setValorTela(valorInicialTela);
        setExpressao(valorInicialExpressao);
        setOperador("");
        setResultado("");
        setValor1(0);
        setValor2(0);
      }
    },
    {
      nome: "C", cor: "primary", acao: () => {
        setValorTela(valorInicialTela);
        setExpressao(valorInicialExpressao);
        setOperador("");
        setResultado("");
        setValor1(0);
        setValor2(0);
      }
    },
    { nome: "Del", cor: "primary", acao: () => { } },
    { nome: "1/x", cor: "primary", acao: () => { } },
    {
      nome: "x**2", cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.PotenciaQuadrado(valor);
        setExpressao(`${valor}**2 = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: "Raiz2", cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.RaizQuadrada(valor);
        setExpressao(`${valor}R2 = `);
        setValorTela(resultado.toString());
      }
    },
    { nome: "/", cor: "primary", acao: () => { } },
    {
      nome: "7", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "7"));
      }
    },
    {
      nome: "8", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "8"));
      }
    },
    {
      nome: "9", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "9"));
      }
    },
    { nome: "*", cor: "primary", acao: () => { } },
    {
      nome: "4", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "4"));
      }
    },
    {
      nome: "5", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "5"));
      }
    },
    {
      nome: "6", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "6"));
      }
    },
    { nome: "-", cor: "primary", acao: () => { } },
    {
      nome: "1", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "1"));
      }
    },
    {
      nome: "2", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "2"));
      }
    },
    {
      nome: "3", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "3"));
      }
    },
    {
      nome: "+", cor: "primary", acao: () => {
        setValor1(Number(valorTela));
        setValorTela("0");
        setOperador("+");
      }
    },
    {
      nome: "+/-", cor: "primary", acao: () => {
        let valor = Number(valorTela);
        let resultado = CalculadoraOperacoes.TrocaDeSinal(valor);
        setExpressao(`+/-${valor} = `);
        setValorTela(resultado.toString());
      }
    },
    {
      nome: "0", cor: "primary", acao: () => {
        setValorTela(CalculadoraOperacoes.ColocaNumero(valorTela, "0"));
      }
    },
    {
      nome: ".", cor: "primary", acao: () => {
        setValorTela(valorTela.concat("."));
      }
    },
    {
      nome: "=", cor: "primary", acao: () => {
        switch (operador) {
          case "+":
            setValor2(Number(valorTela));
            setValorTela(CalculadoraOperacoes.Soma(valor1, valor2).toString());
            setValor1(0);
            setValor2(0);
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
    // maxHeight="400px"
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
