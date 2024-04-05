import classes from './NaverLogin.module.css';
import { useEffect } from 'react';
const NaverLogin = () => {
  useEffect(() => {
    let naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'IVDf4002dzd4_Q6f6fEu',
      callbackUrl: 'http://127.0.0.1:3000/',
      loginButton: { color: 'green', type: 3, height: '50' },
    });
    naverLogin.init();
  }, []);

  return (
    <>
      {/* 로그인 버튼 요청 URI
      https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id="************";&state=74075dc6-cfeb-40f9-87c5-d144e34a3983&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2FnaverLogin&version=js-2.0.0&svctype=1
      응답
      http://localhost:3000/auth/naverLogin#access_token=AAAAOJVd5J9VsZr4FoB************&state=74075dc6-cfeb-40f9-87c5-d144e34a3983&token_type=bearer&expires_in=3600 */}
      <div>
        <div id="naverIdLogin"></div>
      </div>
    </>
  );
};

export default NaverLogin;
