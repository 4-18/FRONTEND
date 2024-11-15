import './LoginPagestyle.scss';
import LoginBtn from '../../components/Login/loginBtn';
import SignUpBtn from '../../components/Login/signUpBtn';
import LoginMent from '../../components/Login/loginMent';
import UserID from '../../components/Login/userID';
import UserPW from '../../components/Login/userPW';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const loginData = {
        username,
        password,
      };

      const response = await axios.post(
        'http://15.165.181.78/users/login', 
        loginData, 
        {
          withCredentials: true,
          headers: { 
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('로그인 성공:', response.data);
      
      if (response.data && response.data.success) {
        navigate('/main');
      } else {
        console.error('로그인 실패:', response.data ? response.data.message : '알 수 없는 오류');
      }
    } catch (error) {
      if (error.response) {
        console.error('로그인 오류:', error.response.data);
      } else {
        console.error('네트워크 오류 또는 서버 접근 불가:', error.message);
      }
    }
  };

  return (
    <div className='MainLoginWrapper'>
      <div className='LogMainWrapper'>
        <LoginMent />
        <div className='input'>
          <UserID setUsername={setUsername} />
          <UserPW setPassword={setPassword} />
        </div>
        <div className='btn'>
          <LoginBtn onClick={handleLogin} />
          <SignUpBtn />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
