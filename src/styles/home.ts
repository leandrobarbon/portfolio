import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;

  img {
    width: 380px;
    height: 371px;
  }
`;

export const TitleApresentation = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  p.title_back {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;

    color: #FFFFFF;
    position: absolute;
  
    & span {
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 56px;
      text-transform: uppercase;

      color: #FEC260;
    }
  }

  p.title_front {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000; 
    color: transparent;
    position: absolute;
    z-index: 1;
    left: -3px;
  }
`;

export const ContainerAbout = styled.section`
  
`;

export const TextAbout = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #FFFFFF;
  margin-top: 102px;
`;

export const Enfase = styled.span`
  color: #3FA796;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40%;
  margin-top: 85px;
`;

export const PersonalInformation = styled.div`
  width: 100%;

  & .title {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;

    color: #FFFFFF;
    margin-bottom: 41px;

  }
`;

export const InsideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;

  & .info {
    display: flex;
    justify-content: space-between;

    & .legend {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;

      color: #3FA796;
    }

    & .dado, a {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;

      color: #FFFFFF;
    }
  }
`;

export const InsideInterest = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 27px;
`;