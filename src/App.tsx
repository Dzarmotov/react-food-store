import React, { Suspense } from "react";
import { Header } from "./components";
import { Home, NotFound } from "./pages";
import { Route, Routes } from "react-router-dom";


import "./scss/app.scss";

const Cart = React.lazy(() => import('./pages/Cart'))
const FullPizza = React.lazy(() => import('./pages/FullPizza'))


const App: React.FC = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={
              <Suspense fallback={<h1 style={{ textAlign: "center" }}>Идёт загрузка корзины</h1>}>
                <Cart />
              </Suspense>
            } />
            <Route path="pizza/:id" element={<Suspense fallback={<h1 style={{ textAlign: "center" }}>Идёт загрузка корзины</h1>}>
              <FullPizza />
            </Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
