import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

//1.전체 상품페이지,로그인,상품 상세페이지
//1-1 nav bar
//2.전체 상품페이지
//3.로그인페이지
//4.로그인 없이 상품디테일 =>로그인 페이지
//5.로그인후 상품 디테일페이지
//6.로그아웃 =>상품 디테일페이지 => 로그인 페이지
//7.로그인 로구아웃 버튼, 로그아웃 로그인
//7.상품 검색

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  return (
    <div className="">
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
