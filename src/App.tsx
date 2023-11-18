import { useState } from "react";
import {
  Ball,
  BallContainer,
  Container,
  Input,
  NthChildContainer,
  NthChildResult,
  NthChildRow,
  NthChildValues,
  Subtitle,
  Title,
} from "./App.styles";

const expressions = ["odd", "even", "2n", "3n", "5n", "3n + 4", "-n + 3"];

const pattern = /^[\s0-9n+-]+$/;

function CustomNthChild() {
  const [expression, setExpression] = useState("2n + 1");

  const hasError = expression ? !pattern.test(expression) : false;

  return (
    <NthChildRow>
      <NthChildValues>
        {/* add native validation */}
        <Input
          $hasError={hasError}
          placeholder="2n + 1"
          value={expression}
          onChange={(ev) => setExpression(ev.target.value)}
        />
      </NthChildValues>
      <NthChildResult>
        <BallContainer $expression={expression} $noHover>
          {Array.from({ length: 10 }).map((_, index) => (
            <Ball key={index}>{index + 1}</Ball>
          ))}
        </BallContainer>
      </NthChildResult>
    </NthChildRow>
  );
}

function App() {
  return (
    <Container>
      <Title>nth-child</Title>
      <Subtitle>Hover on circles</Subtitle>

      <NthChildContainer>
        {expressions.map((expression) => (
          <NthChildRow key={expression}>
            <NthChildValues>
              <strong>{`nth-child:(${expression})`}</strong>
            </NthChildValues>
            <NthChildResult>
              <BallContainer $expression={expression}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <Ball key={index}>{index + 1}</Ball>
                ))}
              </BallContainer>
            </NthChildResult>
          </NthChildRow>
        ))}
        <CustomNthChild />
      </NthChildContainer>
    </Container>
  );
}

export default App;
