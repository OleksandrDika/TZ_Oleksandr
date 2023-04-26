import { Route, Routes } from 'react-router-dom';
import CardInfo from '../pages/CardInfo/CardInfo';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="tweets/:personId" element={<CardInfo />} />
      </Route>
    </Routes>
  );
};
