import { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Flex } from '../components/Containers/Flex';
import CalculadoraOperacoes from '../utils/CalculadoraOperacoes';

export default function Calculadora() {
  const valorInicialTela = "0";

  const [valorTela, setValorTela] = useState(valorInicialTela);
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState("");
  const [expressao, setExpressao] = useState({
    valor1: "", operador: "", valor2: "",
  });

  const listaTeclas = [
    { nome: "x**y", cor: "primary", acao: () => { } },
    { nome: "pi", cor: "primary", acao: () => { } },
    { nome: "n!", cor: "primary", acao: () => { } },
    { nome: "log", cor: "primary", acao: () => { } },

    { nome: "%", cor: "primary", acao: () => { } },
    { nome: "CE", cor: "primary", acao: () => setValorTela(valorInicialTela) },
    { nome: "C", cor: "primary", acao: () => setValorTela(valorInicialTela) },
    { nome: "Del", cor: "primary", acao: () => { } },
    { nome: "1/x", cor: "primary", acao: () => { } },
    { nome: "x**2", cor: "primary", acao: () => { } },
    {
      nome: "Raiz2", cor: "primary", acao: () => {
        setValor1(Number(valorTela));
        setOperador("R2");
      }
    },
    { nome: "/", cor: "primary", acao: () => { } },
    {
      nome: "7", cor: "primary", acao: () => {
        setValorTela("7")
      }
    },
    {
      nome: "8", cor: "primary", acao: () => {
        setValorTela("8")
      }
    },
    {
      nome: "9", cor: "primary", acao: () => {
        setValorTela("9")
      }
    },
    { nome: "x", cor: "primary", acao: () => { } },
    {
      nome: "4", cor: "primary", acao: () => {
        setValorTela("4")
      }
    },
    {
      nome: "5", cor: "primary", acao: () => {
        setValorTela("5")
      }
    },
    {
      nome: "6", cor: "primary", acao: () => {
        setValorTela("6")
      }
    },
    { nome: "-", cor: "primary", acao: () => { } },
    {
      nome: "1", cor: "primary", acao: () => {
        setValorTela("1")
      }
    },
    {
      nome: "2", cor: "primary", acao: () => {
        setValorTela("2")
      }
    },
    {
      nome: "3", cor: "primary", acao: () => {
        setValorTela("3")
      }
    },
    {
      nome: "+", cor: "primary", acao: () => {
        setValor1(Number(valorTela));
        setValorTela("0");
        setOperador("+");
      }
    },
    { nome: "+/-", cor: "primary", acao: () => { } },
    { nome: "0", cor: "primary", acao: () => { } },
    {
      nome: ".", cor: "primary", acao: () => {
        setValorTela(valorTela.concat("."));
      }
    },
    {
      nome: "=", cor: "primary", acao: () => {
        switch (operador) {
          case "R2":
            setValorTela(CalculadoraOperacoes.RaizQuadrada(valor1).toString());
            break;
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
