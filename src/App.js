import React from 'react';
import RootScreens from './app/index';
import { AuthProvider } from './context';
import { CartListProvider } from './context/CartListProvider';
import "antd/dist/antd.css";
import './assets/app.scss';

const App = () => {
  return (
    <AuthProvider>
      <CartListProvider>
        <RootScreens/>
      </CartListProvider>
    </AuthProvider>
  );
}

export default App;
