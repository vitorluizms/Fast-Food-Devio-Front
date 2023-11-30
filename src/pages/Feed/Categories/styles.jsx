import styled from 'styled-components';

export const CategoryContainer = styled.button`
  min-width: 150px;
  width: 20%;
  height: 125px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.small};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    height: 80px;
    background: #ffffff;
    color: #ffffff;
  }
`;
