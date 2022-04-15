import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
// import Home from './Pages/Home/Home';
// import UserList from './Pages/UserList/UserList';
// import User from './Pages/User/User';
// import Product from './Pages/Product/Product';
// import NewUser from './Pages/NewUser/NewUser';
// import ProductNew from './Pages/ProductNew/ProductNew';
// import ProductList from './Pages/ProductList/ProductList';


import { Home, UserList, User, ProductList, Product, NewUser, ProductNew } from './Pages/export'
import './style.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<ProductNew />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
