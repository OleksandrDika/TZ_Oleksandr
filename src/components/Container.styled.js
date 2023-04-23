import styled from 'styled-components';
// import Monsterrat from '../../assets/fonts/Montserrat-Regular.ttf';
// import picture from 'images/picture.jpg';

export const Conteiner = styled.div`
  position: absolute;
  width: 380px;
  height: 460px;
  left: 435px;
  top: 168px;
  padding: 0;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const BoxImage = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
  padding: 0;
  margin: 0;
`;

export const Logo = styled.span`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
  padding: 0;
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;
  padding: 0;

  border-radius: 85.9232px;
`;

export const Tweets = styled.p`
  position: absolute;
  width: 132px;
  height: 24px;
  left: 130px;
  top: 284px;
  margin: 0;
  padding: 0;

  font-family: 'Monsterrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Followers = styled.p`
  position: absolute;
  width: 214px;
  height: 24px;
  left: 93px;
  top: 324px;
  margin: 0;
  padding: 0;
  padding-left: 0;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
