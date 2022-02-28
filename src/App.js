import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { checkUserSession } from './redux/user/user.action';
import { useDispatch } from 'react-redux';

import './default.scss';

//components
import AdminToolbar from './components/adminToolbar/AdminToolbar';
import ProductResults from './components/productResults/ProductResults';
//hoc
import WithAuth from './hoc/WithAuth';
import WithAdminAuth from './hoc/WithAdminAuth';

//pages
import Homepage from './pages/Homepage/Homepage';
import Search from './pages/Search/Search';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import OurWorld from './pages/OurWorld/OurWorld';
import Account from './pages/Account/Account';
import Recovery from './pages/Recovery/Recovery';
import Dashboard from './pages/Dashboard/Dashboard';
import Admin from './pages/Admin/Admin';

//layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/search"
          element={
            <MainLayout>
              <Search />
            </MainLayout>
          }
        />
        <Route
          path="/search/:filterType"
          element={
            <MainLayout>
              <Search />
            </MainLayout>
          }
        />
        <Route
          path="/product/:productID"
          element={
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path="/beanies"
          element={
            <MainLayout>
              <ProductResults filterType="beanies" bannerImageB={false} />
            </MainLayout>
          }
        />
        <Route
          path="/scarves"
          element={
            <MainLayout>
              <ProductResults filterType="scarves" bannerImageS={false} />
            </MainLayout>
          }
        />
        <Route
          path="/gloves"
          element={
            <MainLayout>
              <ProductResults filterType="gloves" bannerImageG={false} />
            </MainLayout>
          }
        />
        <Route
          path="/ourworld"
          element={
            <MainLayout>
              <OurWorld />
            </MainLayout>
          }
        />
        <Route
          path="/account"
          element={
            <MainLayout>
              <Account />
            </MainLayout>
          }
        />
        <Route
          path="/recovery"
          element={
            <MainLayout>
              <Recovery />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          }
        />
      </Routes>
      <AdminToolbar />
    </div>
  );
};

export default App;
