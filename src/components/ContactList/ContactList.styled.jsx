import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }

  & > *:first-child {
    margin-right: 10px;
  }

`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  font-size: 14px;
  color: #666;

  &::before {
    content: 'tel: ';
  }

  &::after {
    content: '';
  }

  & > a {
    color: #666;
    text-decoration: none;
  }

  & > a:hover {
    text-decoration: underline;
  }

  & > a:active {
    color: #666;
  }

  & > a:visited {
    color: #666;
  }

  & > a:link {
    color: #666;
  }

  & > a:focus {
    color: #666;
  }

  & > a:target {
    color: #666;
  }

  & > a:-webkit-any-link {
    color: #666;
  }

  & > a:-moz-any-link {
    color: #666;
  }

  & > a:-moz-focusring {
    color: #666;
  }
`;

export const DeleteButton = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: transparent;
  background-image: url('https://image.flaticon.com/icons/svg/1214/1214428.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;