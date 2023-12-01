import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 150px;
  height: 230px;
  background: transparent;
`;

export const WallpaperImage = styled.img`
  width: 180px;
  height: 120px;
  border-radius: ${({ theme }) => theme.border.radius.medium};
  box-shadow: 4px 0px 12px rgba(0, 0, 0, 0.2);

  position: relative;
  z-index: 1;
`;

export const DescriptionContainer = styled.div`
  width: 180px;
  height: 100px;
  margin-top: -40px;

  border-radius: ${({ theme }) => theme.border.radius.medium};
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    height: 100px;
    background: transparent;
    margin-top: -50px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.small};
    color: ${({ theme }) => theme.color.black};
  }
`;
