import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const MainLayout = (props) => {
  return (
    <div className="mainLayout">
      <Header {...props} />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
