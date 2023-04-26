import {
  Avatar,
  BoxImage,
  Btn,
  BtnIsFol,
  Conteiner,
  Followers,
  Line,
  Logo,
  Tweets,
} from './Container.styled';
import picture from 'images/picture.png';
import logo from 'images/Logo.png';
// import avatar from 'images/Boy.png';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const value = JSON.parse(localStorage.getItem('user'));

const initilState = value ? value : {};

const CardInfo = () => {
  const [user, setUser] = useState(initilState);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [isFollowing, setIsFollowing] = useState(false);
  const { personId } = useParams();

  useEffect(() => {
    const folow = JSON.parse(localStorage.getItem('isFollowing'));

    if (folow) {
      setIsFollowing(folow);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
  }, [isFollowing]);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  useEffect(() => {
    setLoader(true);

    const getUsers = async () => {
      await axios
        .get(`/User/${personId}`)
        .then(resp => {
          // if (!user) {
          setUser(resp.data);
          // }
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => {
          setLoader(false);
        });
    };
    getUsers();
  }, [personId]);

  const handleIncrement = () => {
    setIsFollowing(true);
    setUser(prevState => ({
      ...prevState,
      followers: user.followers + 1,
    }));
  };

  const handleDecrement = () => {
    setIsFollowing(false);

    setUser(prevState => ({
      ...prevState,
      followers: user.followers - 1,
    }));
  };

  return (
    <div>
      <Link to="/tweets">Back to tweets list</Link>

      {!loader && (
        <Conteiner>
          <div>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
            <BoxImage src={picture} alt="Main background picture" />
            <Line></Line>

            <Avatar src={user.avatar} alt="avatar" />

            <Tweets>{user.tweets} tweets</Tweets>
            <Followers> {user.followers} followers</Followers>
            {isFollowing && (
              <BtnIsFol type="button" onClick={handleDecrement}>
                Following
              </BtnIsFol>
            )}
            {!isFollowing && (
              <Btn type="button" onClick={handleIncrement}>
                Follow
              </Btn>
            )}
          </div>
        </Conteiner>
      )}
      {loader && <Loader />}
      <Toaster />
    </div>
  );
};

export default CardInfo;
