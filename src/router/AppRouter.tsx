import { Route, Routes } from 'react-router-dom';
import { DetailRoutes } from './';
import { HomeRoutes } from './HomeRoutes';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/detail/*" element={ <DetailRoutes /> } />
      <Route path="/*" element={ <HomeRoutes /> } />
    </Routes>
  );
};