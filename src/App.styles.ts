import { css, styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

export const Subtitle = styled.h6`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: #888;
  margin: 1rem 0 2rem;
`;

export const NthChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const NthChildRow = styled.div`
  display: flex;
  width: 100%;
`;

export const NthChildValues = styled.div`
  display: flex;
  width: 240px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
  font-family: "Courier New", Courier, monospace;
`;

export const NthChildResult = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Ball = styled.div`
  --size: 42px;
  --bg: #6c67d3;
  --color: inherit;
  width: var(--size);
  height: var(--size);
  border: 1px solid #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 500;
  color: var(--color);
  transition: all 0.1s linear;
`;

export const Input = styled.input<{ $hasError: boolean }>`
  border-radius: 4px;
  border: 1px solid #d8d8d8;
  padding: 6px 12px;
  --background: #fff;
  background-color: var(--background);

  ${(props) =>
    props.$hasError &&
    css`
      --background: #ffa5a5;
    `}
`;

const hoverStyle = (expression: string) => {
  return css`
    &:hover {
      ${Ball} {
        &:nth-child(${() => expression}) {
          background-color: var(--bg);
          border-color: var(--bg);
          --color: #fff;
        }
      }
    }
  `;
};

const noHoverStyle = (expression: string) => {
  return css`
    ${Ball} {
      &:nth-child(${() => expression}) {
        background-color: var(--bg);
        border-color: var(--bg);
        --color: #fff;
      }
    }
  `;
};

export const BallContainer = styled.div<{
  $expression: string;
  $noHover?: boolean;
}>`
  display: flex;
  gap: 4px;
  justify-content: space-between;

  ${(props) =>
    props.$noHover
      ? noHoverStyle(props.$expression)
      : hoverStyle(props.$expression)}
`;
