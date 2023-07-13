import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > *:first-child {
    margin-top: 0;
  }
`;

const AppHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;

  & > a {
    color: #000;
    text-decoration: none;
  }

  & > a:hover {
    text-decoration: underline;
  }

  & > a:active {
    color: #000;
  }
`;

export { AppContainer, AppHeading };