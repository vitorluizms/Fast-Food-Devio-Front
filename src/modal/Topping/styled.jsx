import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftDiv = styled.div`
  width: 70%;

  display: flex;
  align-items: center;
  gap: 30px;

  figure {
    width: 80px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.border.radius.medium};

    img {
      width: 70px;
      height: 70px;
      object-fit: fill;
      object-position: 100% 0;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const RightDiv = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.big};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.small};
    color: ${({ theme }) => theme.color.gray};
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

export const InnerCircle = styled.div`
  width: 25px;
  height: 100%;

  border-radius: ${({ theme }) => theme.border.radius.circle};
  background-color: ${({ theme }) => theme.color.green};
  display: ${({ $isClicked }) => ($isClicked === false ? 'none' : '')};
`;
