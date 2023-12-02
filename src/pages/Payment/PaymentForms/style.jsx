import styled from 'styled-components';

export const PaymentFormContainer = styled.article`
  width: 85%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const AmountPayContainer = styled.div`
  width: 45%;

  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    width: 100%;
    height: 35px;
    padding-left: 10px;

    border: 1px solid ${({ theme }) => theme.color.lightGray};
    background-color: ${({ theme }) => theme.color.input};

    font-size: ${({ theme }) => theme.fonts.size.default};
    font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
    color: ${({ theme }) => theme.color.gray};
  }

  div {
    width: 100%;
    height: 35px;
    padding-left: 10px;

    display: flex;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.color.lightGray};
    background-color: ${({ theme }) => theme.color.input};

    font-size: ${({ theme }) => theme.fonts.size.default};
    font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
    color: ${({ theme }) => theme.color.gray};
  }
`;
