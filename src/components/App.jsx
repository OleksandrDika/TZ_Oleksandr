import {
  Avatar,
  BoxImage,
  Btn,
  Conteiner,
  Followers,
  Line,
  Logo,
  Tweets,
} from './Container.styled';
import picture from 'images/picture.png';
import logo from 'images/Logo.png';
import avatar from 'images/Boy.png';

export const App = () => {
  return (
    <Conteiner>
      <div>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <BoxImage src={picture} alt="Main background picture" />
        <Line></Line>

        <Avatar src={avatar} alt="avatar" />

        <Tweets> 777 tweets</Tweets>
        <Followers> 100,500 followers</Followers>
        <Btn>Follow</Btn>
      </div>
    </Conteiner>
  );
};
