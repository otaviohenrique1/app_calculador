import { useState } from 'react';
import { Button } from 'reactstrap';
import { Flex } from '../components/Containers/Flex';

export default function Calculadora2() {
  const [tela, setTela] = useState("0.0");

  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      paddingTop="30px"
    >
      <Flex
        flexDirection="column"
        width="100%"
        maxWidth="500px"
      >
        <Flex
          flexDirection="row"
          marginTop="20px"
        >
          <h1 className="w-100 text-center">Calculadora</h1>
        </Flex>
        <Flex
          flexDirection="row"
          marginTop="30px"
          marginBottom="50px"
        >
          <h2 className="w-100 text-center">{tela}</h2>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button
            color="danger"
            className="w-100 m-1"
          >%</Button>
          <Button
            color="danger"
            className="w-100 m-1"
            onClick={() => setTela("0.0")}
          >CE</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >C</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >{"<="}</Button>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button
            color="danger"
            className="w-100 m-1"
          >1/x</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >x^2</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >R2</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >/</Button>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button
            color="danger"
            className="w-100 m-1"
          >7</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >8</Button>
          <Button
            color="danger"
            className="w-100 m-1"
            onClick={() => setTela("9")}
          >9</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >x</Button>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button
            color="danger"
            className="w-100 m-1"
          >4</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >5</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >6</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >-</Button>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button
            color="danger"
            className="w-100 m-1"
          >1</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >2</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >3</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >+</Button>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button
            color="danger"
            className="w-100 m-1"
          >+/-</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >0</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >.</Button>
          <Button
            color="danger"
            className="w-100 m-1"
          >=</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
