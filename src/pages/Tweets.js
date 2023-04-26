// import getUsers from 'components/getUsers';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loader } from 'components/Loader/Loader';

axios.defaults.baseURL = 'https://64456a1c914c816083ce4385.mockapi.io';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  useEffect(() => {
    localStorage.clear();
    localStorage.removeItem('user');
  }, []);

  useEffect(() => {
    setLoader(true);

    const getUsers = async () => {
      await axios
        .get('/User')
        .then(resp => {
          setUsers(resp.data);
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => {
          setLoader(false);
        });
    };
    getUsers();
  }, []);

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {users.map(user => {
          return (
            <li key={user.id}>
              <Link
                key={user.id}
                to={`${user.id}`}
                style={{ display: 'flex', alignItems: 'center', padding: 5 }}
              >
                <img src={user.avatar} alt="avatar" />
                <h3>{user.user}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
      {loader && <Loader />}
      <Toaster />
    </div>
  );
};
export default Tweets;
