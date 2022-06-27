import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
/* import { Cart } from "./pages/Cart"; */
import { FullPizza } from "./pages/FullPizza";

const Cart = React.lazy(() => import("./pages/Cart"));

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route path="/pizza/:id" element={<FullPizza />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
