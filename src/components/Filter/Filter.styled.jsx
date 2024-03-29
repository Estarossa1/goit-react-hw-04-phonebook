import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #666;
`;
export const Input = styled.input `
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &:invalid {
        border-color: #f44336;
    }

    &::-webkit-input-placeholder {
        color: #007bff;
    }

    &::-moz-placeholder {
        color: #007bff;
    }
`