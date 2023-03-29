import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#1976d2' : '#e2e5e8')};
  color: ${({ selected }) => (selected ? '#fff' : 'inherit')};

  &:hover {
    background-color: #1976d2;
    color: #fff;
  }

  &:active {
    background-color: #1565c0;
    color: #fff;
  }
`;
