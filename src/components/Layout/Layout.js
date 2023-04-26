import { NavLink, Outlet } from 'react-router-dom';
import { ListLayout, NavItem } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <ListLayout>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tweets">Tweets</NavLink>
        </NavItem>
      </ListLayout>
      <Outlet />
    </div>
  );
};
