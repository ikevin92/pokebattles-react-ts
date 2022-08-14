
import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailPage, HomePage } from '../pages';

export const DetailRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={ <DetailPage /> } />
      <Route path="/*" element={ <Navigate to="/1" /> } />
    </Routes>
  )
}