import classes from './NaverLogin.module.css';
import { useEffect } from 'react';
const NaverLogin = () => {
  let naverLogin = new window.naver.LoginWithNaverId({
    clientId: 'IVDf4002dzd4_Q6f6fEu',
    callbackUrl: 'http://localhost:3000/auth',
    loginButton: { color: 'green', type: 3, height: '50' },
  });

  useEffect(() => {
    naverLogin.init();
  }, []);

  return (
    <>
      <div>
        <div id="naverIdLogin"></div>
      </div>
    </>
  );
};

export default NaverLogin;
