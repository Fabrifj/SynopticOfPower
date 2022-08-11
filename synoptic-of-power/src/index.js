import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
// Pages 
import Home from './page/Home'
import Layout from './components/Layout';
import Contact from './page/Contact'
import Political from './page/Political'
import NoPage from './page/NoPage'
import FootHome from './components/FootHome';
import SearchPage from './page/SearchPage';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="political" element={<Political />} />
            <Route path="contact" element={<Contact />} />
            <Route path="searchpage" element={<SearchPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <FootHome></FootHome>
      <Outlet/>
    </>
    


  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  <App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
