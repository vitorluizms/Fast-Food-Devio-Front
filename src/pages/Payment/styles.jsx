import styled from 'styled-components';
import { FaCreditCard } from 'react-icons/fa6';
import { FaWallet, FaMoneyBillAlt } from 'react-icons/fa';

export const TitleContainer = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.bigger};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const ContentContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 50px;
`;

export const StyledIcon = styled(FaWallet)`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkGreen};
`;

export const StyledCard = styled(FaCreditCard)`
  font-size: 24px;
  color: ${({ theme }) => theme.color.darkGreen};
`;

export const StyledMoney = styled(FaMoneyBillAlt)`
  font-size: 24px;
  color: ${({ theme }) => theme.color.darkGreen};
`;

export const PaymentResume = styled.section`
  min-width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.default};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const ResumeContainer = styled.section`
  width: 80%;
  height: auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.border.radius.small};

  h4 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.thin};
    font-size: ${({ theme }) => theme.fonts.size.default};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const AmountPayContainer = styled.article`
  width: 100%;
  height: 50px;
  border-top: 1px dashed ${({ theme }) => theme.color.gray};
  padding-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.bigger};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const ClientInfo = styled.section`
  width: 80%;
  height: 100%;

  display: flex;
  gap: 15px;
`;

export const NameInputContainer = styled.article`
  width: 60%;
  height: auto;

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
`;

export const CodeContainer = styled.article`
  width: calc(40% - 20px);
  height: auto;

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

    border: 1px solid ${({ theme }) => theme.color.lightGray};
    background-color: ${({ theme }) => theme.color.input};

    font-size: ${({ theme }) => theme.fonts.size.default};
    font-weight: ${({ theme }) => theme.fonts.weight.thin};
    color: ${({ theme }) => theme.color.black};

    display: flex;
    align-items: center;
  }
`;

export const RightSide = styled.section`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.default};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const PaymentFormatContainer = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PaymentSelector = styled.div`
  width: 85%;
  height: 65px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.lightGray};

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const SelectTopping = styled.button`
  width: 20px;
  height: 20px;
  padding: 1px;

  border-radius: ${({ theme }) => theme.border.radius.circle};
  border: 1px solid ${({ theme }) => theme.color.green};
  background-color: transparent;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const InnerCircle = styled.article`
  width: 25px;
  height: 100%;
  border: none;

  border-radius: ${({ theme }) => theme.border.radius.circle};
  background-color: ${({ theme }) => theme.color.green};
  display: ${({ $isClicked }) => ($isClicked === false ? 'none' : '')};
`;
