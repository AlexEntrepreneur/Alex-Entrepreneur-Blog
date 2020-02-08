import styled from "@emotion/styled";

export const Button = styled.button<{ primary?: boolean, large?: boolean }>`
  padding: 0 20px;
  height: ${props => props.large ? '50px' : '40px'};
  min-width: ${props => props.large ? '200px' : '150px'};
  font-size: ${props => props.large ? '18px' : 'inherit'};
  font-weight: 500;
  text-decoration-color: black;
  border: 2px solid  ${props => props.theme.colors.primary};
  background: ${props => props.primary ? props.theme.colors.primary : 'unset'};
  color: ${props => props.primary ? props.theme.colors.secondary : props.theme.colors.primary};

  &:active {
  transform: scale(.98);
  transition: transform 100ms ease-in-out;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  button:nth-of-type(odd) {
    margin-right: 30px;

    ${mediaqueries.phablet`
      margin-right: unset;
      margin-bottom: 30px;
    `}
  }

  ${mediaqueries.phablet`
    flex-direction: column-reverse;
    `}
`;